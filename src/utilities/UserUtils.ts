import { hash, compare } from "bcrypt";
// import { UserModel } from "../db/entitys/User.model";

class UserUtils {
  /**
   * hash
   * Este metodo encriptada un string
   */
  public async hashPassword(myPlaintextPassword: string) {
    try {
      return await hash(myPlaintextPassword, 10);
    } catch (error) {
      console.log("Error en el hasheo: ", error);
    }
  }

  // public static async checkUser(username: string, password: string) {
  //   const currentUser = await UserModel.findOne({ where: { username } });
  //   const match = await compare(password, currentUser!.password);
  //   if (match) {
  //     //login
  //   }
  // }
}
export const userUtils = new UserUtils();
// (async () => {
//   console.log(await UserUtils.hashPassword("holaa"));
// })();
