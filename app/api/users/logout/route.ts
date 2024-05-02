import { connectToDB } from '@/database/dbConfig/dbConfig'
import { NextRequest, NextResponse } from 'next/server';


connectToDB();

export async function GET(request: NextRequest) {

    try {
        
        const response = NextResponse.json({ message: "Logout Successful", success: true}, { status: 200, statusText: "OK"});
        response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)});
        return response;
        
    }
    catch (error: any) {
        return NextResponse.json({ 
            error: error.message 
        }, { 
            status: 500, 
            statusText: "Internal Server Error"
        });
    }
}