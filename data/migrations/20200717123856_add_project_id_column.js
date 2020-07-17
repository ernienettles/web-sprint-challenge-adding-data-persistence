
exports.up = function (knex) {
    return knex.schema.table('tasks', tbl => {
        tbl.integer('project_id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks')
};
