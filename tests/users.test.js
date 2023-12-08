const supertest = require('supertest');
const app = require('../app');

describe('POST /users/', () => {
    it('should handle invalid user data', async () => {
        const response = await supertest(app)
            .post('/users/')
            .send({ invalidData: 'test' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Bad Request');
        expect(response.body.details).toBe('Missing required properties in user object');
    });
});

describe('POST /users/', () => {
    it('should handle invalid user data', async () => {
        const response = await supertest(app)
            .post('/users/')
            .send({ username: 'test', email: 'test' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Bad Request');
        expect(response.body.details).toBe('Invalid email or username format');
    });
});

describe('POST /users/', () => {
    it("should post a new user and get it on /users", async () => {
        const response = await supertest(app)
            .post('/users/')
            .send({ username: 'John', email: 'johndoe@yopmail.com'})
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('User added successfully')
        const users = await supertest(app)
            .get('/users')

        expect(users.body.length).toBe(1)
        expect(users.body[0].username).toBe('John')
        expect(users.body[0].email).toBe('johndoe@yopmail.com')
    })

    it("shouldn't post a user already who already exist", async () => {
        const response = await supertest(app)
            .post('/users/')
            .send({ username: 'John', email: 'johndoe@yopmail.com'})
        expect(response.status).toBe(400)
        expect(response.body.error).toBe('Bad Request')
        expect(response.body.details).toBe('Email or username already exists')
    })
})

