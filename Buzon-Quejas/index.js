import app from "./app/app.js";
import colors from "colors";
import { config } from "dotenv";
config();

let port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Estoy en puerto ${port.yellow}`);
});