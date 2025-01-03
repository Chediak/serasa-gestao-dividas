require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
