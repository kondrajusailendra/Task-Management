const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

router.get('/gettasks', getTasks);
router.get('/gettaskbyid/:id', getTaskById);
router.post('/createtask', createTask);
router.put('/updatetask/:id', updateTask);
router.delete('/deletetask/:id', deleteTask);

module.exports = router;
