export default {
  DB: {
    HOST: process.env.MYSQL_HOST || "localhost",
    USER: process.env.MYSQL_USER || "root",
    PASSWORD: process.env.MYSQL_PASSWORD || "root",
    DATABASE: process.env.MYSQL_DATABASE || "dbTest",
  },
};
