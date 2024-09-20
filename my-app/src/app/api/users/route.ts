import {users} from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"
export function GET(){
    const data = users
    return NextResponse.json(data,{status:200})
}
export async function POST(req:NextRequest) {
    const payload = await req.json();
    console.log( payload.name)
    if(!payload.name || !payload.age || !payload.email){
        
    return NextResponse.json( {result:"Required field not found",success:false},{status:400})
    }
    
    return NextResponse.json( {result:"new user created",success:true},{status:201})
}