// IMPORTS
import { pool } from "../server.js";

export const getAllTasks = async (req, res) => {
    const [tasks] = await pool.query('SELECT * FROM tasks');
    res.status(200).json({ data: tasks });
};

export const sortByDescDate = async (req, res) => {
    const [tasks] = await pool.query(`SELECT * FROM tasks ORDER BY createdAt DESC`);
    res.status(200).json({ data: tasks });
};

export const sortByAscDate = async (req, res) => {
    const [tasks] = await pool.query(`SELECT * FROM tasks ORDER BY createdAt ASC`);
    res.status(200).json({ data: tasks });
};

export const createTask = async (req, res) => {
    const { task } = req.body;
    await pool.query('INSERT INTO tasks(task) VALUES(?)', [task]);
    res.status(201).json({ msg: 'task created' });
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id=?', [id]);
    res.status(204).json({ msg: 'task deleted' });
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    await pool.query('UPDATE tasks SET task=? WHERE id=?', [task, id]);
    res.status(200).json({ msg: 'task updated' });
};

export const checkTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    await pool.query('UPDATE tasks SET isCompleted=? WHERE id=?', [status, id]);
    res.status(200).json({ msg: 'status updated' });
}