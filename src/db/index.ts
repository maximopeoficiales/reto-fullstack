import { Sequelize } from "sequelize";
import config from "../config/index";

export const sequelize = new Sequelize(
  config.DB.DATABASE,
  config.DB.USER,
  config.DB.PASSWORD,
  {
    host: config.DB.HOST,
    dialect: "mysql",
  }
);
