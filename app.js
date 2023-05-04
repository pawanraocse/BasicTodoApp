const express = require('express');
const app = new express();
const db = require('./db');
const todos = require('./routes/todos');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/todos', todos);

app.get('/', (req, res) => {
  res.send("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});