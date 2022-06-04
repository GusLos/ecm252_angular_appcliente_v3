require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')
const Cliente = require ('./models/cliente')
app.use(bodyParser.json());

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_HOST,
  MONGODB_DATABASE
} = process.env

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
  console.log("Conexão OK")
})
.catch((e) => {
  console.log("Conexão NOK: " + e)
})



const clientes = [
  {
    id: '1',
    nome: 'José',
    fone: '11223344',
    email: 'jose@email.com'
  },
  {
    id:'2',
    nome: 'Jaqueline',
    fone: '22112211',
    email: 'jaqueline@email.com'
  }
]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  next();
})

app.post('/api/clientes', (req, res, next) => {
  const cli = new Cliente (req.body)
  // const cliente = new Cliente({
  //   nome: req.body.nome,
  //   fone: req.body.fone,
  //   email: req.body.email
  // })
  cli.save()
  res.status(201).json({mensagem: 'Cliente inserido'});
});

app.get('/api/clientes', (req, res, next) => {
  res.status(200).json({
    mensagem: 'Tudo OK',
    clientes: clientes
  });
});

module.exports = app;
