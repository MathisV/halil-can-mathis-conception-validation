// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('./usersData'); // Assurez-vous que le chemin est correct

// Endpoint pour récupérer la liste des utilisateurs
router.get('/', function (req, res, next) {
    try {
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Endpoint pour ajouter un utilisateur
router.post('/add', function (req, res, next) {
    try {
        console.log('Request received at /users/add', req.body);
        const newUser = req.body;

        // Vérification du type de newUser
        if (typeof newUser === 'object' && newUser !== null) {
            // Vérification des propriétés obligatoires
            if ('username' in newUser && 'email' in newUser) {
                // Vérification du format de l'e-mail
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // vérification si doublon de l'e-mail
                const emailExists = users.some((user) => user.email === newUser.email);
                // vérification si doublon du username
                const usernameExists = users.some((user) => user.username === newUser.username);

                // Vérification de l'username (lettres et '-')
                const usernameRegex = /^[a-zA-Z-]+$/;

                if (emailRegex.test(newUser.email) && usernameRegex.test(newUser.username) && !emailExists && !usernameExists) {
                    users.push(newUser);
                    res.json({ message: 'User added successfully', users });
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

module.exports = router;
