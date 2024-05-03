import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/database/dbConfig/dbConfig";
import User from "@/database/models/userModel";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const { id } = reqbody;

        const user = await User.findOne({ _id: id }).select("-password -emailVerificationToken -emailVerificationTokenSentAt -emailConfirmTokenSentCount -emailVerified -emailVerifiedAt -verifyEmailToken -verifyEmailTokenExpiry -isVerified -createdAt -updatedAt -gender -dateOfBirth  ");

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400, statusText: "Not Found" }
            );
        }

        const response = NextResponse.json(
            { user: user , message: "Login Successful", success: true },
            { status: 200, statusText: "OK" }
        );

        return response;

    } catch (error: any) {
        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status: 500,
                statusText: "Internal Server Error",
            }
        );
    }
}
