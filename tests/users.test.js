const supertest = require('supertest');
const app = require('../app');
const users = require('../routes/usersData');
const { isValidUserObject, userExists, validateUserData, addUser, findUserById } = require('../routes/UserRepository');

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

describe('User Management Tests', () => {

    test('isValidUserObject returns true for valid user object', () => {
        const user = { username: 'testuser', email: 'test@test.com' };
        const result = isValidUserObject(user);
        expect(result).toBe(true);
    });

    test('userExists returns false for a new user', () => {
        const user = { username: 'newuser', email: 'newuser@test.com' };
        const result = userExists(user);
        expect(result).toBe(false);
    });

    test('validateUserData returns true for valid user data', () => {
        const user = { username: 'validuser', email: 'valid@test.com' };
        const result = validateUserData(user);
        expect(result).toBe(true);
    });

    test('addUser adds a user to the users array', () => {
        const user = { username: 'adduser', email: 'adduser@test.com' };
        addUser(user);
        expect(users).toContain(user);
    });

    test('findUserById returns a user for a valid ID', () => {
        const user = { id: 1, username: 'John', email: 'johndoe@yopmail.com' };
        users.push(user);
        const result = findUserById(1);
        expect(result).toEqual(user);
    });

});