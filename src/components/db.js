// mock/db.js
export const mockDB = {
    users: [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
        { id: 2, username: 'user', password: 'user123', role: 'user' },
    ],
};

export function validateUser(username, password) {
    return mockDB.users.find(
        (user) => user.username === username && user.password === password
    );
}
