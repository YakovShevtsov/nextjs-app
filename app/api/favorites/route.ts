import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const favorites = await prisma.favorite.findMany()
  return NextResponse.json(favorites)
}

export async function POST(req: Request) {
  const data = await req.json()
  const newFav = await prisma.favorite.create({ data })
  return NextResponse.json(newFav)
}