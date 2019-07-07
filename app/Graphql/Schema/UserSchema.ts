import {gql} from 'apollo-server-express'
export const UserSchema = gql`    
    scalar Date
    scalar Timestamp
    type User{
        id: String!,
        full_name: String!,
        email: String!,
        created_at: Date!,
        updated_at: Date!
    }
    extend type Query {
        users: [User]
        user(id:String!):User
    }
    extend type Mutation{
        register_user(full_name:String!,email:String!,password:String!):User
    }
`
