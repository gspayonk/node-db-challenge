exports.up = function(knex) {
    return knex.schema

    .createTable('projects', tbl=> {
        tbl.increments();
        tbl.string('project_name', 164).notNullable();
        tbl.string('project_description', 255);
        tbl.boolean('project_completed').notNullable().defaultTo(false);

        tbl
            .integer('task_id')
            .unsigned()
            .references('id')
            .inTable('tasks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    .createTable('resources', tbl=> {
        tbl.increments();
        tbl.string('resource_name', 164).notNullable();
        tbl.string('resource_description', 244);

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    .createTable('tasks', tbl=> {
        tbl.increments();
        tbl.string('task_description', 64).notNullable();
        tbl.string('task_notes', 255);
        tbl.boolean('task_completed').notNullable().defaultTo(false);

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
    })

    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('project_resources')
}; 