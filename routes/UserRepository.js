const users = require('./usersData');

function isValidUserObject(user) {
    return typeof user === 'object' && user !== null && 'username' in user && 'email' in user;
}

function userExists(user) {
    return users.some(u => u.email === user.email || u.username === user.username);
}

function validateUserData(user) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z-]+$/;
    return emailRegex.test(user.email) && usernameRegex.test(user.username);
}

function addUser(user) {
    const userId = users.length + 1;
    user.id = userId;
    users.push(user);
}

function findUserById(userId) {
    return users.find((user) => user.id === userId);
}

module.exports = { isValidUserObject, userExists, validateUserData, addUser, findUserById }