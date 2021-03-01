import { sequelize } from "./db";
async function startConnection(): Promise<void> {
  try {
    // con este solo te conectas a la bd
    // sequelize.authenticate
    // el sync hace que no se haga un drop table
    await sequelize.sync({ force: false });
    console.log("DB connected");
  } catch (error) {
    console.log(`Error en la conexion: ${error}`);
  }
}
startConnection();
