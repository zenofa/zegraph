import * as express from "express"
import { Request,Response } from "express";

class Web {
    public router: express.Router = express.Router()

    constructor() {
        this.config()
    }

    private config(): void {
        this.router.get("/",( req: Request,res: Response)=>res.json({message:"Zenofa GraphQL Framework API"}))
    }
}

export const routes = new Web().router
