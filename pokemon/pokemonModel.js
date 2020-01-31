const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(pokemon) {
  return db('pokedex').insert(pokemon, "id");
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('pokedex')
  .where({id})
  .del(id);
}

function getAll() {
  return db('pokedex');
}

function findById(id) {
  return null;
}