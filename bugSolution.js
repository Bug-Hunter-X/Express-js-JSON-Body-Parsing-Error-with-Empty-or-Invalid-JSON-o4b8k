const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    console.log(req.body);
    res.send('User registered');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});