import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners'
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
