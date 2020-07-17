const express = require('express');

const Projects = require('../model/project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Couldnt retrieve projects from database" })
    }
})

router.post('/', async (req, res) => {
    try {
        const project = req.body;

        const addedProject = await Projects.addProject(project);
        res.status(201).json(addedProject);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Couldnt add project to database" })
    }
})

module.exports = router;