
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_description');
        tbl.boolean('completed').defaultTo(false);
    })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name').notNullable();
            tbl.string('resource_description');
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description').notNullable();
            tbl.string('notes')
            tbl.boolean('completed').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
