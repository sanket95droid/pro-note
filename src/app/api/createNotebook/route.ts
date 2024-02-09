// endpoint: /api/createNotebook

import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImagePrompt, generateImage } from "@/lib/openai";
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
    const image_description = await generateImagePrompt(name)
    if(!image_description){
        return new NextResponse('failed to generate image_description', {status: 500})
    }
    const image_url = await generateImage(image_description)
    if(!image_url){
        return new NextResponse('failed to generate image_url', {status: 500})
    }

    const notes_ids = await db.insert($notes).values({
        name,
        userId,
        imageUrl: image_url,
    }).returning({
        insertedId: $notes.id
    })
    return NextResponse.json({note_id: notes_ids[0].insertedId}, {status: 500})
    console.log(image_description)
}