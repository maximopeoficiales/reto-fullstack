import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

async function startConnection(): Promise<void> {
  try {
    const dbOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(config.DB.URI, dbOptions);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
}
startConnection();
