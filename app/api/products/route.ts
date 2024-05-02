import { connectToDB } from '@/database/dbConfig/dbConfig'
import  Product  from '@/database/models/productModel';
import { NextRequest } from 'next/server';

connectToDB();

export async function GET() {
    try {
        const products = await Product.find({}).select("-createdAt -updatedAt");
        return { products: products };
    } catch (error: any) {
        return { error: error.message };
    }
}

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const { name, description, price, quantity, category } = reqbody;

        const product = new Product({
            name,
            description,
            price,
            quantity,
            category
        });

        const savedProduct = await product.save();
        console.log(savedProduct);

        return { message: "Product Added Successfully", success: true };
    } catch (error: any) {
        return { error: error.message };
    }
}