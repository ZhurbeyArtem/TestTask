const sequelize = require('../db')
import {DataTypes} from 'sequelize'

export const Declaration = sequelize.define('declaration',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true, allowNull: false},
    price:{type: DataTypes.INTEGER, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false},
    cords:{type: DataTypes.STRING, allowNull: false},
})