import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count'
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
