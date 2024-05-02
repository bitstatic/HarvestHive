import { connectToDB } from '@/database/dbConfig/dbConfig'
import User from '@/database/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connectToDB();

export async function POST(request: NextRequest, response: NextResponse) {
    
    try {
        const reqbody = await request.json();
        const { token } = reqbody;
        console.log(token);

        const user = await User.findOne({
                verifyEmailToken: token, 
                verifyEmailTokenExpiry: {$gt: Date.now()} 
        });

        console.log(user);

        if(!user) {
            return NextResponse.json({ error: "Invalid Token"}, { status: 400});
        }

        user.isVerified = true;
        user.verifyEmailToken = undefined;
        user.verifyEmailTokenExpiry = undefined;
        user.emailVerified = true;
        user.emailVerifiedAt = Date.now();

        await user.save();

        return NextResponse.json({ message: "Email verified successfully. You can now login to your account.", success: true});
    }
    catch (error: any) {
        return NextResponse.json({ 
            error: error.message,
            success: false 
        }, { 
            status: 500, 
            statusText: "Internal Server Error"
        });
    }
}