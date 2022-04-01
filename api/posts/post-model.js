const db = require('../../data/dbConfig');

module.exports = {
  get,
  getById,
  getByUserId,
  insert,
  update,
  remove,
};

function get() {
  return db('posts');
}

function getById(id) {
  return db('posts')
    .where({ id })
    .first();
}

// Get post by a user id
function getByUserId(id) {
    return db('posts')
        .where({ user_id: id })
        .first();
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}