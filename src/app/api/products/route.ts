import { carData } from '@/components/data/carData';
import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json(carData);
}