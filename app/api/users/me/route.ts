import { connectToDB } from '@/database/dbConfig/dbConfig'
import User from '@/database/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/src/util/session/session';

connectToDB();

export async function GET(request: NextRequest) {

    try {
        // Extract Data from Token
        const token = request.cookies.get("token")?.value || "";

        if(!token) {
            return NextResponse.json({ error: "No token found" }, { status: 400, statusText: "Bad Request"});
        }


        const SessionPayload:any = await decrypt(token).then((data)=>{return data});

        console.log("Session Payload: ");
        console.log(SessionPayload) ;
        

        const userId = SessionPayload.id;

        console.log("User ID: " + userId);

        const user = await User.findById(userId).select("-password -emailVerificationToken -emailVerificationTokenSentAt -emailConfirmTokenSentCount -emailVerified -emailVerifiedAt -verifyEmailToken -verifyEmailTokenExpiry -isVerified -createdAt -updatedAt");
        
        if(!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400, statusText: "Not Found"});
        }

        return NextResponse.json({ user: user }, { status: 200, statusText: "OK"});


    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 500,
            statusText: "Internal Server Error"
        });
    }


}