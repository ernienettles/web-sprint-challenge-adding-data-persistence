const express = require('express');

const Projects = require('../model/project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Projects.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Couldnt retrieve tasks from database" })
    }
})

router.post('/', async (req, res) => {
    try {
        const task = req.body;

        const taskId = await Projects.addTask(task);
        res.status(201).json(taskId);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Couldnt add task to database" })
    }
})

module.exports = router;