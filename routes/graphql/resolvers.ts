import {UserResolver as UserResolver } from "../../app/Graphql/Resolvers/UserResolver"
import {merge} from "lodash"
// @ts-ignore
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'
const baseResolvers = {
    JSON: GraphQLJSON,
    JSONObject: GraphQLJSONObject,
}
export const resolvers = merge(baseResolvers,UserResolver)