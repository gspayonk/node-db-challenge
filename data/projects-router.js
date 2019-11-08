const express = require('express');
const router = express.Router();
const db = require('./project-functions');
const Projects = require('./project-functions');

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
    .then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Project not found' })
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Project not found' });
    });
});

router.get('/:id/resources', (req, res)=> {
    Projects.getResources()
    .select('resources.name', 'resources.description')
    .from('resources')
    .join('resources', 'projects.id', '=', 'resources.project_id')
    .then(resources=> {
        res.status(200).json(resources)
    })
    .catch (error => {
        res.status(500).json({ message: 'Resources not found' });
    });
});

router.get('/:id/tasks', (req, res)=> {
    Projects.getTasks()
    .select('tasks.name', 'tasks.description')
    .from('tasks')
    .join('projects', 'tasks.project_id', '=','projects.id' )
    .then(tasks=> {
        res.status(200).json(tasks)
    })
    .catch (error => {
        res.status(500).json({ message: 'Tasks not found' });
    });
});

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(req.body)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


//Put

//Delete

module.exports = router;