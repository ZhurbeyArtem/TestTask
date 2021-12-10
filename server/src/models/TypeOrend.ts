const sequelize = require('../db')
import {DataTypes} from 'sequelize'

export const typeOrend = sequelize.define('typeOrend',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique:true}
})