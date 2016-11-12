
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('todos', function(table){
            table.increments('id');
            table.string('name');
            table.boolean('done');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('todos'),
    ])
};
