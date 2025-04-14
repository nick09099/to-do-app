const express = require('express');
const app = express();

app.use(express.json());

// In-memory todos
const todos = [];

// Routes
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title };
  todos.push(todo);
  res.status(201).json(todo);
});

// Only listen when not in test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`To-Do app listening at http://localhost:${PORT}`);
  });
}

module.exports = app;
