import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../index";

interface UserInstance extends Model {
  name: string;
  lastName: string;
  email: string;
  user: string;
  password: string;
}
export const UserModel = sequelize.define<UserInstance>("Users", {
  name: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  user: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});
