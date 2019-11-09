const db = require('./dbConfig')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getResourceById,
    getTasks,
    addTask,
    getTaskById,
    findById
}

//project
function getProjects(){
    return db('projects');
};

function addProject(project){
    return db
    .insert(project, 'id')
    .into('projects')
};

//task

function getTasks() {
    return db
    .select('p.id', 'p.project_name', 'p.project_description', 't.tasks_description', 't.task_notes', 't.task_completed')
    .from('projects as p')
    .innerJoin('tasks as t', 'p.id', 't.project_id')
    .where({ project_id: project_id })
}

function addTask(task, id) {
    return db
        .insert(task, 'id')
        .into('tasks')
        .where({ project_id: id })
}

function getTaskById(id){
    return db('tasks')
        .where({ id })
        .first();
}

//resources
function getResources() {
    return db('resources')
}

function addResource(resource) {
    return db
    .insert(resource, 'id')
    .into('resources')
}

function getResourceById(id){
    return db('tasks')
        .where({ id })
        .first();
}

//by id
function findById(id){
    return db('projects')
        .where({ id })
        .first();
}