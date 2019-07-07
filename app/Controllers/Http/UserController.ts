import {User as UserModel} from "../../Models/User"
import * as argon2 from "argon2"
export class UserController {
    public user = async (params: any) => await UserModel.findOne(params.id)
    public users = async () => await UserModel.find()
    public addUser = async (params:any) => {
        let user = new UserModel()
        user.full_name = params.full_name
        user.email = params.email
        user.password = await argon2.hash(params.password)
        return await user.save()
    }
}


export const userController = new UserController()
