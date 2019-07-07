import * as express from "express"
import * as bodyParser from "body-parser"
import { ApolloServer } from 'apollo-server-express'
import { database } from '../config/database'
import {routes as webRoutes} from "../routes/web"
import {routes as apiRoutes} from "../routes/api"
import {typeDefs} from "../routes/graphql/schema"
import {resolvers} from "../routes/graphql/resolvers"
import "reflect-metadata"
import {config as loadEnv} from 'dotenv'

class App {
  public app: express.Application

  constructor() {
    loadEnv()
    this.app = express()
    this.config()
  }

  private config(): void {
    database.then(()=>console.log('database connected')).catch((error)=>console.log(error.message))
    // support application/json
    this.app.use(bodyParser.json())
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // Routing
    this.app.use("/",webRoutes)
    this.app.use("/api",apiRoutes)
    const server = new ApolloServer({typeDefs,resolvers})
    server.applyMiddleware({app:this.app})
  }
}

export default new App().app