import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const response = await axios.get(
    'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers'
  );
  return NextResponse.json(response.data);
}
