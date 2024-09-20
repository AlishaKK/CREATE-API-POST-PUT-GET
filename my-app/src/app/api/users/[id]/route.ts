import {users} from "@/utils/db"
import { NextResponse,NextRequest } from "next/server"

export function GET(request:NextRequest,{params}:any){
   
    const data =users;
    console.log({data},params.id)
    const usersData =data.filter((item)=>item.id==params.id)
    return NextResponse.json( usersData.length==0?{Result:"no data found",success:false}:{result:usersData[0],success:true},
        {status:200})
     
}
export async function PUT(req:NextRequest, {params}) {
    const payload = await req.json();
   
    payload.id = params.id
    console.log( payload)
    if(!payload.name || !payload.age || !payload.email){
        
    return NextResponse.json( {result:"Required field not found",success:false},{status:400})
    }
    
    return NextResponse.json( {result:payload,success:true},{status:201})
}