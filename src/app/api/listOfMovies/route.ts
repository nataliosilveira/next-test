import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';
import queryString from 'query-string';
export async function GET(data: NextRequest) {
  const year = await data.nextUrl.searchParams.get('year');
  const winner = await data.nextUrl.searchParams.get('winner');
  const page = await data.nextUrl.searchParams.get('page');
  const result = queryString.stringifyUrl({
    url: 'https://tools.texoit.com/backend-java/api/movies',
    query: { year: year, winner: winner, page: page || 0, size: 10 },
  });
  const response = await axios.get(result);
  return NextResponse.json(response.data);
}
