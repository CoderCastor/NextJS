import { NextRequest, NextResponse } from "next/server";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";


const handler = NextAuth({
    providers : [
        Credentials({
            name : "Email",
            credentials :{
                username : {label :"username",type:"text",placeholder:"codercastor"},
                password : {label:"password",type:"password",placeholder:"password"}
            },
            async authorize(credentials, req) {
                
                return {
                    username : "codercastor",
                    id :"1",
                    email : "coder@dev",
                   
                }
            },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
})

export const GET = handler 
export const POST = handler 
