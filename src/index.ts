import dotenv from "dotenv";
dotenv.config(); //cargo las variables de entorno
import app from "./app";
import "./database";

app.listen(app.get("port"));
console.log("Server on port ", app.get("port"));
