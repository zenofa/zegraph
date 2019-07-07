import app from "./bootstrap/app"
import {config as loadEnv} from 'dotenv'
loadEnv()
const PORT = process.env.SERVER_PORT || 3000
app.listen({ port: PORT }, () =>
    console.log(`🚀🚀🚀 Server ready at http://localhost:${PORT} - `+process.env.NODE_ENV+' mode')
);