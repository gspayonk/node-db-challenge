exports.up = function(knex) {
    return knex.schema
    
    .createTable('projects', tbl=> {
        tbl.increments();
        tbl.string('name', 164).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
        
        tbl
            .integer('task_id')
            .unsigned()
            .references('id')
            .inTable('tasks')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        
        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })

    .createTable('resources', tbl=> {
        tbl.increments();
        tbl.string('name', 164).notNullable();
        tbl.string('description', 244);
        
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })

    .createTable('tasks', tbl=> {
        tbl.increments();
        tbl.string('description', 64).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
        
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};