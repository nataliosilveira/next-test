import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(data: NextRequest) {
  const year = await data.nextUrl.searchParams.get('year');
  const response = await axios.get(`https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`);
  return NextResponse.json(response.data);
}
