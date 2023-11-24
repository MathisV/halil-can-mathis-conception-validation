// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('./usersData'); // Make sure the path is correct

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
router.post('/add', function (req, res, next) {
    try {
        console.log('Request received at /users/add', req.body);
        const newUser = req.body;

        // Check the type of newUser
        if (typeof newUser === 'object' && newUser !== null) {
            // Check for required properties
            if ('username' in newUser && 'email' in newUser) {
                // Check email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // Check for email and username duplicates
                const emailExists = users.some((user) => user.email === newUser.email);
                const usernameExists = users.some((user) => user.username === newUser.username);

                // Check username format (letters and '-')
                const usernameRegex = /^[a-zA-Z-]+$/;

                if (emailRegex.test(newUser.email) && usernameRegex.test(newUser.username) && !emailExists && !usernameExists) {
                    // Assign a unique ID based on the user's index
                    const userId = users.length + 1;
                    newUser.id = userId;

                    users.push(newUser);
                    res.json({ message: 'User added successfully', user: newUser });
                } else {
                    res.status(400).json({ error: 'Bad Request', details: 'Invalid email or username format' });
                }
            } else {
                res.status(400).json({ error: 'Bad Request', details: 'Missing required properties in user object' });
            }
        } else {
            res.status(400).json({ error: 'Bad Request', details: 'Invalid user object' });
        }
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Endpoint to retrieve a specific user by ID
router.get('/:id', function (req, res, next) {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Not Found', details: 'User not found' });
    }
});

module.exports = router;
