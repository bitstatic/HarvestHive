import { connectToDB } from '@/database/dbConfig/dbConfig'
import User from '@/database/models/userModel'
import bcryptjs from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { encrypt } from '@/src/util/session/session'

connectToDB()

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json()
    const { email, password } = reqbody

    // console.log('ReqBody')
    // console.log(reqbody)

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 400, statusText: 'Not Found' }
      )
    }

    // console.log(user)

    const validPassword = await bcryptjs.compare(password, user.password)

    if (!validPassword) {
      return NextResponse.json(
        { error: 'Check Your Credentials' },
        { status: 401, statusText: 'Unauthorized' }
      )
    }

    // console.log(validPassword)

    const tokenPayload = {
      id: user._id,
      email: user.email,
    }

    const token = await encrypt(tokenPayload);

    console.log('jwt token: ' + token)

    const response = NextResponse.json(
      { message: 'Login Successful', success: true },
      { status: 200, statusText: 'OK' }
    )

    response.cookies.set('token', token, { httpOnly: true })

    return response
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    )
  }
}
