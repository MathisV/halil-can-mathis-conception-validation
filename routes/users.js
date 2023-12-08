// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('./usersData');
const { findUserById, addUser, validateUserData,isValidUserObject, userExists } = require("./UserRepository");

// Endpoint to retrieve the list of users
router.get('/', function (req, res, next) {
    try {
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Endpoint to add a user
router.post('/', function (req, res, next) {
    try {
        console.log('Request received at /users/add', req.body);
        const newUser = req.body;

        if (isValidUserObject(newUser)) {
            if (!userExists(newUser)) {
                if (validateUserData(newUser)) {
                    addUser(newUser);
                    res.json({ message: 'User added successfully', user: newUser });
                } else {
                    res.status(400).json({ error: 'Bad Request', details: 'Invalid email or username format' });
                }
            } else {
                res.status(400).json({ error: 'Bad Request', details: 'Email or username already exists' });
            }
        } else {
            res.status(400).json({ error: 'Bad Request', details: 'Missing required properties in user object' });
        }
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Endpoint to retrieve a specific user by ID
router.get('/:id', function (req, res, next) {
    const userId = parseInt(req.params.id);
    const user = findUserById(userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Not Found', details: 'User not found' });
    }
});

module.exports = router;
