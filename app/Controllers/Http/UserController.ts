import {User as UserModel} from "../../Models/User"
export class UserController {
    public user = async (params: any) => await UserModel.findOne(params.id)
    public users = async () => await UserModel.find()
}


export const userController = new UserController()
