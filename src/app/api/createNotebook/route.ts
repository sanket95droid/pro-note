// endpoint: /api/createNotebook

import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // we get the userId from the auth()
    const {userId} = auth()
    //then we check if there is not userId: which means the user is not logged in
    if(!userId) {
        return new NextResponse('unauthorised', {status:401});
    }
    const body  = await req.json()
    const {name} = body
    const image_description = await generateImagePrompt(name);
    console.log({image_description})
    return new NextResponse(image_description, {status:200})
}