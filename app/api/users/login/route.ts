import { connectToDB } from '@/database/dbConfig/dbConfig'
import User from '@/database/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connectToDB();

export async function POST(request: NextRequest) {

    try {
        const reqbody = await request.json();
        const {username, email, password} = reqbody;

        console.log("ReqBody" + reqbody);

        const user = await User.findOne ({email}) || await User.findOne({username});

        if(!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400, statusText: "Not Found"});
        }

        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword) {
            return NextResponse.json({ error: "Check Your Credentials" }, { status: 401, statusText: "Unauthorized"});
        }

        const tokenPayload = {
            id : user._id,
            username: user.username,
            email: user.email,
        }

        const token = await jwt.sign(tokenPayload, process.env.JWT_SECRET!, { expiresIn: "12h"});
        console.log("jwt token: " + token);

        const response = NextResponse.json({ message: "Login Successful", success: true}, { status: 200, statusText: "OK"});

        response.cookies.set("token", token, {httpOnly: true});

        return response;
        
    } catch (error: any) {
        return NextResponse.json({ 
            error: error.message 
        }, { 
            status: 500, 
            statusText: "Internal Server Error"
        });
    }

}
