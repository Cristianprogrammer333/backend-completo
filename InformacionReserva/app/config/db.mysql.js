import { createPool } from "mysql2/promise";
import { config } from "dotenv";
import nodemailer from 'nodemailer';
config();

export const pool = createPool({
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE
});

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'carelocoh@gmail.com', // Cambia esto por tu correo
        pass: 'cristianoquendo12345' // Cambia esto por tu contraseña
    }
});


