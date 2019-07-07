import { IResolvers } from "graphql-tools"
import {User as UserModel} from "../../Models/User"
import * as argon2 from 'argon2'
import {userController} from "../../Controllers/Http/UserController"
export const UserResolver:IResolvers = {
    Date: Date,
    Query:{
        async users(_){
            return await userController.users()
        },
        async user(_,params){
            return await userController.user(params)
        }
    },
    Mutation:{
        async register_user(_,{full_name,email,password}){
            let user = new UserModel()
            user.full_name = full_name
            user.email = email
            user.password = await argon2.hash(password)
            return await user.save()
        }
    }
}
