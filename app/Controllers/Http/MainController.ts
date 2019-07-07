import { Request,Response } from "express";
export class MainController {
    public async root( req: Request,res: Response) {
        res.json({message:"Zenofa GraphQL Framework"})
    }
}

export const mainController = new MainController()
