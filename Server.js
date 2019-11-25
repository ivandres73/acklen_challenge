
const express = require('express'); 
// new: import User
const User = require('./User');  
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' });
});

// new: route to users, that runs readAll()
app.get('/users', User.readAll);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});