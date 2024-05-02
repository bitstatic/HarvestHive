import { connectToDB } from '@/databse/dbConfig/dbConfig'
import User from '@/databse/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/src/util/mailer';
import { Phone } from '@mui/icons-material';


connectToDB();

export async function POST(request: NextRequest, response: NextResponse) {

    try {
        const reqbody = await request.json();
        const { username, email, password, firstName, lastName, dateOfBirth, role, phone} = reqbody;

        const user = await User.findOne({email});
        if(user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400, statusText: "Bad Request", headers: { 'Content-Type': 'application/json' }});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            firstName : firstName ? firstName : "",
            lastName: lastName ? lastName : "",
            dateOfBirth: dateOfBirth ? dateOfBirth : null,
            role: role ? role : "customer",
            phone: phone ? phone : "",
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        

        // Send verification email to user
        const SentEmail = await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});

        if(!SentEmail) {
            return NextResponse.json({ error: "Email could not be sent" }, { status: 500, statusText: "Internal Server Error", headers: { 'Content-Type': 'application/json' }});
        }else{
            savedUser.emailVerificationTokenSentAt = Date.now(); 
            savedUser.emailConfirmTokenSentCount += 1;
            await savedUser.save();
            console.log(SentEmail);
        }

        const sendUser = {
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            role: savedUser.role,
            phone: savedUser.phone,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            dateOfBirth: savedUser.dateOfBirth,
            emailVerified: savedUser.emailVerified,
            isVerified: savedUser.isVerified,
        }

        
        return NextResponse.json({ 
            message: "User created successfully",
            success: true,
            user: sendUser
        }, { 
            status: 201,
            statusText: "Created"
        });
        
    } catch (error: any) {
        return NextResponse.json({ 
            error: error.message 
        }, { 
            status: 500, 
            statusText: "Internal Server Error"
        });
    }

}
