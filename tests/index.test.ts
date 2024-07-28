import request from 'supertest';
import { app } from "../src"

describe('GET /', () => {
    it('should return Hello Azalea!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello Azalea!');
        expect(response.status).toBe(200);
    });
});