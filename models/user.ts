import Sequelize from 'sequelize';
import {db} from '../config/db';

export const User = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    login:{
        type:Sequelize.STRING,
        allowNull : false
    },
    password:{
        type:Sequelize.STRING,
        allowNull : false
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull : false
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
});