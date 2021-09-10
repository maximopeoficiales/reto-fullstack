import config from "./config/index";
// necesario segun la documentacion
import "reflect-metadata";
import { createConnection, getConnectionManager } from "typeorm";
// conexion con typeorm
async function startConnection(): Promise<void> {
  try {
    const connectionManager = getConnectionManager();
    const connection = connectionManager.create({
      type: "mysql",
      host: config.DB.HOST,
      port: parseInt(config.DB.PORT),
      username: config.DB.USER,
      password: config.DB.PASSWORD,
      database: config.DB.DATABASE,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    });
    await connection.connect();
    console.log("DB connected");
  } catch (error) {
    console.log(`Error en la conexion: ${error}`);
  }
}
startConnection();
