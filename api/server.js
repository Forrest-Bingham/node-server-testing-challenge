const express = require("express");

const Pokemon = require("../pokemon/pokemonModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ test:"Success" });
});

server.get("/pokemon", (req, res) => {
  Pokemon.getAll()
    .then(poke => {
      res.status(200).json(poke);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;