require('dotenv').config();
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Importação de rotas
const authRoutes = require('./routes/auth');

// Registro de rotas
app.use('/auth', authRoutes);

// Rota padrão para checar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API is running');
});

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
