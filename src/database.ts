import sequelize from "./db/Init";
async function startConnection(): Promise<void> {
  try {
    // con este solo te conectas a la bd
    // sequelize.authenticate
    await sequelize.sync({ force: false });
    console.log("DB connected");
  } catch (error) {
    console.log(`Error en la conexion: ${error}`);
  }
}
startConnection();
