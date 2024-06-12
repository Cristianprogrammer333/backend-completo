import express from "express";
import rutaAerolinea from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//RUTAS
app.get("/", (req, res) =>{
    res.send("Bienvenido a la Aereolinea Travels Wings");
});

app.use("/", rutaAerolinea);
export default app;