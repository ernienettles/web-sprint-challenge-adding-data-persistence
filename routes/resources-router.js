const express = require('express');

const Projects = require('../model/project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Projects.getResources();
        res.status(200).json(resources);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error when retrieving resources" })
    }
})

router.post('/', async (req, res) => {
    try {
        const resource = req.body;

        const addedResource = await Projects.addResource(resource);
        res.status(201).json(addedResource);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error when adding resource" })
    }
})

module.exports = router;