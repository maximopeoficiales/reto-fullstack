//imports
import express from "express";
import path from "path";
import morgan from "morgan";
import indexRoutes from "./routes/index.route";
//initializations
const app = express();
//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug"); //no necesitamos hacer ninguna configuracion
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(morgan("dev"));
app.use(express.json()); //devolver datos como json
app.use(express.urlencoded({ extended: false })); //forms envian json
//routes
app.use("/", indexRoutes);

export default app;
