import * as express from "express"
import { mainController } from "../app/Controllers/Http/MainController"

class Web {
    public router: express.Router = express.Router()

    constructor() {
        this.config()
    }

    private config(): void {
        this.router.get("/", mainController.root)
    }
}

export const routes = new Web().router
