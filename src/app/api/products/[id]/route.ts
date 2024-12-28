import { NextRequest, NextResponse } from "next/server";
import { carData } from "@/components/data/carData";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } 
) {
  const resolvedParams = await params; 
  const id = parseInt(resolvedParams.id, 10); 
  const product = carData.find((product) => product.id === id);
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
