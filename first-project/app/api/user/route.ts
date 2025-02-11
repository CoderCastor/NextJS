import { NextResponse } from "next/server";


export function GET(){

    return NextResponse.json({
        user:"codercastor",
        email:"codercastor@dev"
    })
}