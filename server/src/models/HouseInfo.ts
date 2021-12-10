const sequelize = require('../db')
import {DataTypes} from 'sequelize'

export const HouseInfo = sequelize.define('houseInfo',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true, allowNull: false},
    description:{type: DataTypes.STRING , allowNull: false},
    street:{type: DataTypes.STRING, allowNull: false}
})