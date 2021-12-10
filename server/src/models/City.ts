const sequelize = require('../db')
import {DataTypes} from 'sequelize'

export const City = sequelize.define('city',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique:true},
})