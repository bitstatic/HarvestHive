import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/src/util/session/session';
import { connectToDB } from '@/database/dbConfig/dbConfig';
import Product from '@/database/models/productModel';


connectToDB();

export async function GET(request: NextRequest) {
    try {
        // Extract Data from Token
        const token = request.cookies.get("token")?.value || "";

        if (!token) {
            return NextResponse.json({ error: "No token found" }, { status: 400, statusText: "Bad Request" });
        }

        const SessionPayload: any = await decrypt(token).then((data) => { return data });

        // console.log("Session Payload: ");
        // console.log(SessionPayload);

        const userId = SessionPayload.id;

        // console.log("User ID: " + userId);

        const products = await Product.find({ seller: userId }).select("-createdAt -updatedAt");

        if (!products) {
            return NextResponse.json({ error: "Products not found" }, { status: 404, statusText: "Not Found" });
        }

        console.log(products);

        return NextResponse.json(products, { status: 200, statusText: "OK" });

    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }
}


export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const { name, description, price, quantity, category, harvestDate, organic, address, images } = reqbody;

        // Extract Data from Token
        const token = request.cookies.get("token")?.value || "";
        const SessionPayload:any = await decrypt(token).then((data)=>{return data});
        // console.log("Session Payload: ");
        // console.log(SessionPayload) ;
        const userId = SessionPayload.id;


        const product = new Product({
            seller : userId,
            name,
            description : description || "",
            price : price,
            quantity : quantity,
            images: images || [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            category : category || "Others",  // Default category is Others
            harvestDate: harvestDate || new Date("2024-05-03"),
            organic: organic || false,
            address: address
        });

        const savedProduct = await product.save();
        console.log(savedProduct);

        return NextResponse.json({ message: "Product Added Successfully", success: true }, { status: 200, statusText: "OK" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }
}

export async function PUT(request: NextRequest) {
    
    try {

        const reqbody = await request.json();

        console.log(reqbody);

        const { id, name, description, price, quantity, category, harvestDate, organic, address, images } = reqbody;

        const updateFields :any = {};
        if (name) updateFields.name = name;
        if (description) updateFields.description = description;
        if (price) updateFields.price = price;
        if (quantity) updateFields.quantity = quantity;
        if (category) updateFields.category = category;
        if (harvestDate) updateFields.harvestDate = harvestDate;
        if (organic !== undefined) updateFields.organic = organic;
        if (address) updateFields.address = address;
        if (images) updateFields.images = images;

        const product = await Product
            .findByIdAndUpdate(id, updateFields, { new: true });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404, statusText: "Not Found" });
        }

        console.log(product);

        return NextResponse.json({ message: "Product Updated Successfully", success: true }, { status: 200, statusText: "OK" });
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }

}