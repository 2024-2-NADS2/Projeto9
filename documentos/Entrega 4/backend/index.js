const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Substitua pelo seu usuário do MySQL
  password: "", // Substitua pela sua senha do MySQL
  database: "cadastro_provisorio",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados!");
});

// Rota para cadastrar usuários
app.post("/register", async (req, res) => {
  const { nome, cpf, estado, endereco, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const sql = `INSERT INTO usuarios (nome, cpf, estado, endereco, email, senha) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nome, cpf, estado, endereco, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res.status(400).send("CPF ou Email já estão cadastrados.");
        } else {
          console.error(err);
          res.status(500).send("Erro no servidor.");
        }
      } else {
        res.status(201).send("Usuário cadastrado com sucesso!");
      }
    });
  } catch (error) {
    res.status(500).send("Erro no servidor.");
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
