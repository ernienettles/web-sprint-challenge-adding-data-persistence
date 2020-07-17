const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(201).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/tasks', (req, res) => {
    Projects.findTasks()
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks);
            } else {
                res.status(404).json({ message: 'Could not find tasks.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(rsources => {
            if (resources.length) {
                res.json(resources);
            } else {
                res.status(404).json({ message: 'Could not find resources' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new Project' });
        });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new Resource' });
        });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new Resource' });
        });
});

module.exports = router;