/**
 * @jest-environment node
 */
import { GET } from './route';

describe('GET API Route', () => {
  it('should return data with status 200', async () => {
    const requestObj = {
      nextUrl: {
        searchParams: new URLSearchParams({ year: '1998', winner: 'true', page: '0' }),
      },
    } as any;
    const response = await GET(requestObj);
    expect(response.status).toBe(200);
  });
});
