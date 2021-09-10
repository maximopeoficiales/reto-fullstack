//imports
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./web/routes/clients.route";
//initializations
const app = express();
//settings
app.set("port", process.env.PORT || 3000);
// cargo los helpers
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //devolver datos como json
app.use(express.urlencoded({ extended: false })); //forms envian json
//routes
app.use("/api", indexRoutes);

export default app;
