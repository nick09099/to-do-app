const express = require('express');
const app = express();

// middleware and routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`To-Do app listening at http://localhost:${PORT}`);
});

module.exports = app;
