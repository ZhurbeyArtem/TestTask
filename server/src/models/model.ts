const sequelize = require('../db')

import {City} from './City'
import {Declaration} from "./Declaration";
import {HouseInfo} from "./HouseInfo";
import {typeOrend} from './TypeOrend'
import {User} from './User'

User.hasMany(Declaration)
Declaration.belongsTo(User)

City.hasOne(Declaration)
Declaration.belongsTo(City)

typeOrend.hasOne(Declaration)
Declaration.belongsTo(typeOrend)

Declaration.hasMany(HouseInfo, {as:'info'})
HouseInfo.belongsTo(Declaration)

module.exports = {
    User,
    Declaration,
    typeOrend,
    HouseInfo
}