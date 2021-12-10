const sequelize = require('../db')
import {DataTypes} from 'sequelize'
import {UserEnums} from "../enums/UserEnums";

export const User = sequelize.define('user',{
 id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true,  allowNull: false},
    password:{type: DataTypes.STRING, allowNull: false},
    role: {type:DataTypes.STRING , defaultValue: UserEnums.USER},
    phone:{type: DataTypes.STRING, unique: true, allowNull: false},
    FIO:{type: DataTypes.STRING, allowNull: false}
})