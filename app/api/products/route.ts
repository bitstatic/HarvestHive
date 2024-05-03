import { connectToDB } from '@/database/dbConfig/dbConfig'
import  Product  from '@/database/models/productModel';
import { decrypt } from '@/src/util/session/session';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

connectToDB();

export async function GET(request : NextRequest) {
    try {

        const products = await Product.find({}).select("-createdAt -updatedAt");

        if (!products) {
            return NextResponse.json({ error: "Products not found" }, { status: 404, statusText: "Not Found" });
        }

        console.log(products);

        return NextResponse.json(products, { status: 200, statusText: "OK" });

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500, statusText: "Internal Server Error" });
    }
}


export  async function POST(request: NextRequest) {
    try {
        
        const reqbody = await request.json();

        console.log(reqbody);

        const { keyword } = reqbody;

        const keywordsArray = keyword.split(" ");
        console.log(keyword);

        const keywordQueries = keywordsArray.map((word :string) => ({
        $or: [
            { name: { $regex: word, $options: 'i' } },
            { description: { $regex: word, $options: 'i' } },
            { category: { $regex: word, $options: 'i' } },
            { address: { $regex: word, $options: 'i' } },
        ]
        }));

        const products = await Product.find({
            $or: keywordQueries
        }).select("-createdAt -updatedAt");


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