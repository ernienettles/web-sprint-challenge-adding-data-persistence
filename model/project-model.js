const db = require('../data/dbConfig.js');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

async function addResource(resource) {
    return await db('resources')
        .insert(resource)
}

async function getResources() {
    return await db('resources');
}

async function addProject(project) {
    return await db('projects')
        .insert(project)
}

async function getProjects() {
    return await db('projects');
}

async function addTask(task) {
    return await db('tasks')
        .insert(task)
}

async function getTasks() {
    return await db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('tasks.id', 'tasks.task_description', 'tasks.notes', 'tasks.completed', 'tasks.project_id', 'projects.project_name', 'projects.project_description')
}