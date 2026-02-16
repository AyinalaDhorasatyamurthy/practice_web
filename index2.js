const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
// Middleware to parse JSON
app.use(bodyParser.json());
// Secret key for JWT
const secretKey = 'welcome123';
const port = 9000;

const users = [
  {id: 1, username: 'admin', password: 'admin123'},
  {id: 2, username: 'user1', password: 'user123'},
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  }
  else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Start server
app.listen(port, () => {
  console.log(`JWT server listening on port ${port}`);
});