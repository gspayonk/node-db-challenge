const db = require('../data/dbConfig')

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
    return db.select('*').from('projects')
};

function addProject(project){
    return db('projects')
    .insert(project)
    .then(allids=> {
        return db('projects').where({id: allids[0]}).first();
    })
};

//task

function getTasks() {
    return db('task as t')
    .join('project as p', 'p.id', '=', 't.project_id')
    .select('t.id','p.project_name', 'p.description as projectDescription', 't.description as task','t.completed')
}

function addTask(task) {
    return db('task')
        .insert(task)
        .then(allids=> {
            return db('projects').where({id: allids[0]}).first();
        })
}

function getTaskById(id){
    return db('tasks')
        .where({ id })
        .first();
}



//resources
function getResources() {
    return db.select('*').from('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(allids=> {
            return db('resources').where({id: allids[0]}).first();
        })
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