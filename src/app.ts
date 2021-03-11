//imports
import express from "express";
import path from "path";
import morgan from "morgan";
import indexRoutes from "./web/routes/index.route";
//initializations
const app = express();
//settings
app.set("port", process.env.PORT || 3000);
// cargo los helpers
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(morgan("dev"));
app.use(express.json()); //devolver datos como json
app.use(express.urlencoded({ extended: false })); //forms envian json
//routes
app.use("/", indexRoutes);

export default app;
