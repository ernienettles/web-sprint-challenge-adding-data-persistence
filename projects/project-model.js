const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    findTasks,
    addProject,
    addResource,
    findResources,
    addTask,
    update,
    remove
}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function findTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.project_name', 'projects.project_description', 'tasks.task_name', 'tasks.description')
}

function findResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0])
        })
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return findById(ids[0])
        })
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return findById(ids[0])
        })
}


function update(changes, id) {
    return db('projects')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id)
        })
}

async function remove(id) {
    const removed = await findById(id);
    return db('projects')
        .where({ id })
        .del()
        .then(() => {
            return removed;
        })
}