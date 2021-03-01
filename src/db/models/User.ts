import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../index";
class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "users",
  }
);

export = User;
