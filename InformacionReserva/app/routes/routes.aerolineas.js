import { Router } from "express";
import { actualizarAerolineas, crearAerolineas, eliminarAerolineas, listarAerolineas, loginAerolineas, mostrarAerolineas } from "../controllers/controllers.aerolineas.js";
import { validarPermiso } from "../middlewares/middlewares.aerolinea.js";
import { transporter } from "../config/db.mysql.js";

const rutaAerolineas = Router();

rutaAerolineas.post("/aerolinea", validarPermiso,crearAerolineas);

rutaAerolineas.get("/aerolinea/:id", mostrarAerolineas);
rutaAerolineas.get("/aerolinea", listarAerolineas);
rutaAerolineas.post("/login", loginAerolineas);
rutaAerolineas.put("/aerolinea", validarPermiso,actualizarAerolineas);
rutaAerolineas.delete("/aerolinea", validarPermiso,eliminarAerolineas);


rutaAerolineas.post('/reservar', (req, res) => {
    const { nombre, apellido, correo_electronico, destino } = req.body;
    const mailOptions = {
        from: 'carelocoh@gmail.com',
        to: correo_electronico,
        subject: 'Confirmación de Reserva',
        text: `¡Gracias ${nombre} ${apellido} por tu reserva! Has reservado un vuelo a ${destino}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo de confirmación enviado');
    });
});


export default rutaAerolineas;