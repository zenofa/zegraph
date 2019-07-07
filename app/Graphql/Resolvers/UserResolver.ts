import { IResolvers } from "graphql-tools"
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
        //params full_name,email,password
        async register_user(_,params){
            return await userController.addUser(params)
        }
    }
}
