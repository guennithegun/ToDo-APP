import express from 'express';
import db from '../db/db';
import todoController from '../todosControllers/todos';

const router = express.Router();

// getting all the todos
router.get('/api/v1/todos', todoController.getAllTodos);

// get a single todo
router.get('/api/v1/todos/:id', todoController.getTodo);

// endpoint to create todo
router.post('/api/v1/todos', todoController.createTodo);

// endpoint to update a todo
router.put('/api/v1/todos/:id', todoController.updateTodo);

// endpoint to delete a todo from list
router.delete('/api/v1/todos/:id', todoController.deleteTodo);

export default router;
