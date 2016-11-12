
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todos').insert({id: 1, name: 'Connect Redux to React'}),
        knex('todos').insert({id: 2, name: 'Connect React to GraphQUL'}),
        knex('todos').insert({id: 3, name: 'Connect GraphQL to Sql'}),
        knex('todos').insert({id: 4, name: 'Create Unit test'}),
      ]);
    });
};
