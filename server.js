import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

// IMPORTS
import router from './routes/todo_routes.js';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// DATABASE
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    port: process.env.DB_PORT,
    multipleStatements: true
}).promise();

app.use('/', router);

const port = process.env.PORT;

app.listen(port, () => console.log(`server is running on port ${port}`));