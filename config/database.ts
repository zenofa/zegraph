import {createConnections} from "typeorm";
import {config as loadEnv} from 'dotenv'
loadEnv()
export const database = createConnections([{
    "name": "default",
    "type": "mysql",
    "host": process.env.DB_HOST || 'localhost',
    "port": Number(process.env.DB_PORT) || 3306,
    "username": process.env.DB_USER || 'root',
    "password": process.env.DB_PASSWORD || 'password',
    "database": process.env.DB_NAME || 'database',
    "synchronize": true,
    "logging": false,
    "entities": [
        __dirname+"/../app/Models/*{.js,.ts}"
    ],
    "migrations": [
        __dirname+"/../database/migrations/*{.js,.ts}"
    ],
    "subscribers": [
        __dirname+"/../database/subscriber/*{.js,.ts}"
    ]
}])