import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/src/util/session/session';
import { connectToDB } from '@/database/dbConfig/dbConfig';
import Bid from '@/database/models/bidModel';


