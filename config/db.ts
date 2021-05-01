import {Sequelize} from 'sequelize';

export const db = new Sequelize('user_details','postgres','admin123',{
    
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
});