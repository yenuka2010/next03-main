import MongoConnect from "@/app/libs/MongoConnect";
import Product from "@/models/productModel";
import { NextResponce } from "next/server"

export async function GET() {
    return NextResponce.jason({ massage: "This is the GET route!"})
}

export async function POST() {
    return NextResponce.jason({ massage: "This is the POST route!"})
}
