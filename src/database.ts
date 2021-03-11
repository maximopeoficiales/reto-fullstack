import { createConnection } from "typeorm";
import config from "./config/index";
// conexion con typeorm
async function startConnection(): Promise<void> {
  try {
    await createConnection({
      type: "mysql",
      host: config.DB.HOST,
      port: parseInt(config.DB.PORT),
      username: config.DB.USER,
      password: config.DB.PASSWORD,
      database: config.DB.DATABASE,
      entities: [__dirname + "/db/models/*.ts"],
      synchronize: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(`Error en la conexion: ${error}`);
  }
}
startConnection();
