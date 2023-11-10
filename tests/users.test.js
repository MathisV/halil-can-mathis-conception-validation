const supertest = require('supertest');
const app = require('../app');

describe('POST /users/add', () => {
    it('should handle invalid user data', async () => {
        const response = await supertest(app)
            .post('/users/add')
            .send({ invalidData: 'test' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Bad Request');
        expect(response.body.details).toBe('Missing required properties in user object');
    });
});

describe('POST /users/add', () => {
    it('should handle invalid user data', async () => {
        const response = await supertest(app)
            .post('/users/add')
            .send({ username: 'test', email: 'test' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Bad Request');
        expect(response.body.details).toBe('Invalid email or username format');
    });
});