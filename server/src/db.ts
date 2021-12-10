import {Sequelize} from 'sequelize'
require('dotenv').config();

const dbName: string  = process.env.DB_NAME as string
const dbUser: string  =     process.env.DB_USER as string
const dbPassword: any  =  process.env.DB_PASSWORD
const dbHost: any  = process.env.DB_HOST
const dbPort: any  = process.env.DB_PORT

module.exports = new Sequelize(
    dbName,
    dbUser,
   dbPassword,
    {
        dialect: 'postgres',
        host: dbHost,
        port: dbPort,
    }

)