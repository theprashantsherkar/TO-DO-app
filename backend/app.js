import express from 'express'
import userRoute from './routes/user.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
export const app = express()
import taskRoute from './routes/task.js'
import bodyParser from 'body-parser'
import { errorMiddleware } from './middleware/error.js'
import cors from 'cors'

app.use(express.json())
app.use(cookieParser())
app.use('/users', userRoute)
app.use('/task', taskRoute)
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    
}))
app.use(bodyParser.urlencoded({ extended: true }));
config({
    path:"./data/config.env"
})    


app.use(errorMiddleware)