const express = require('express');
const app = express();
const todos = require('./routes/todos');

app.use(express.json());
app.use('/todos', todos);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`To-Do app listening at http://localhost:${PORT}`);
});

module.exports = app;