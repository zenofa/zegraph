import {UserSchema as UserSchema } from "../../app/Graphql/Schema/UserSchema"
import { gql } from 'apollo-server-express'
const baseSchema = gql`
    scalar JSON
    scalar JSONObject
    type Query
    type Mutation
`
export const typeDefs = [baseSchema,UserSchema]