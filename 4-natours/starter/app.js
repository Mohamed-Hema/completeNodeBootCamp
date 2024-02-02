const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server', app: 'naturs' });
});
app.post('/', (req, res) => {
  res.send('u can post');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sever is Runing on port ${port}`);
});
