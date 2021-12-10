import express, {Application, Request, Response} from "express";
require('dotenv').config();
const sequelize = require('./db')
const models = require('./models/model')
const router = require('./routers/Routers')
import cors from 'cors'

const app:Application = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use('/api',router)



const start = async ()=>{
    try {

       await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}
start()
