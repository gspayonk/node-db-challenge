const express = require('express');
const router = express.Router();
const Projects = require('./project-functions');
const boolns = require('./boolean');
const {checkCompletion, checkTasksCompletion} = boolns;

//gets projects
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

//checked
router.get('/api/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(error => {
            res.status(500).json({ message: 'Resources not found' })
        });
});

// router.get('/:id/resources', (req, res)=> {
//     Projects.getResources()
//     .select('resources.name', 'resources.description')
//     .from('resources')
//     .join('resources', 'projects.id', '=', 'resources.project_id')
//     .then(resources=> {
//         res.status(200).json(resources)
//     })
//     .catch (error => {
//         res.status(500).json({ message: 'Resources not found' });
//     });
// });

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json(checkCompletion(checkTasksCompletion(task)))
        });
});

//post
router.post('/', (req, res) => {
    const body = req.body
    Projects.addProject(body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/tasks', (req, res) => {
    const id = req.params.id
    const body = req.body
    Projects.addTask(id, body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/resources', (req,res) => {
    const body = req.body
    Projects.addResources(body)
    .then(tasks => {
        res.json(tasks);
        })
        .catch(err => {
        res.status(500).json({ message: 'Failed to add tasks' });
    });
})

//by id
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

router.get('/resources/:id', (req,res) => {
    const { id } = req.params;
    Projects.getResourceId(id)
    .then(resource => {
        res.json(resource)
        })

        .catch(err => {
        res.status(500).json({ message: 'Failed finding project' });
    });
})

router.get('/:id/tasks', (req, res)=> {
    const {id} = req.params;
    Projects.getTasks(id)
    .then(tasks=> {
        res.status(200).json(tasks)
    })
    .catch (error => {
        res.status(500).json({ message: 'Tasks not found' });
    });
});


//Put
router.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { task_completed } = req.body;
    db('tasks')
        .where({ id })
        .first()
        .update({ task_completed })
        .then(id => {
        res.status(200).json(id);
        });
});

router.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const { project_name, project_description } = req.body;
    db('projects')
        .where({ id })
        .update({ project_name, project_description })
        .then(id => {
        res.status(200).json(id);
    });
});

//delete
router.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .del()
        .where({ id })
        .then(boolns => {

        res
            .status(200)
            .json(!!Number(boolns) ? { message: 'deleted' } : { message: 'error' });
        });
});

module.exports = router;