const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (requisicao, resposta) => {
  resposta.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("acesso com o id " + socket.id);
});

function geraValor() {
  return (Math.random() * 100).toFixed(2);
}

setInterval(() => {
  io.emit("visualizar", geraValor());
}, 1000);

server.listen(3000, () => {
  console.log("servidor na porta 3000");
});
