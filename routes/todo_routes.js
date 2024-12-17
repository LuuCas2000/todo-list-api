import express from 'express';

// IMPORTS
import { getAllTasks, sortByDescDate, sortByAscDate, createTask, deleteTask, updateTask, checkTaskStatus } from '../controllers/todo_controllers.js';

const router = express.Router();

router.route('/')
.get(getAllTasks);

router.route('/desc')
.get(sortByDescDate);

router.route('/asc')
.get(sortByAscDate);

router.route('/task/new')
.post(createTask);

router.route('/task/delete/:id')
.delete(deleteTask);

router.route('/task/update/:id')
.put(updateTask);

router.route('/task/update/status/:id')
.put(checkTaskStatus);

export default router;