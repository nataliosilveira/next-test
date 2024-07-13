/**
 * @jest-environment node
 */
import { GET } from './route';

describe('GET API Route', () => {
  it('should return data with status 200', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });
});
