import {DataTypes, Model, Optional} from 'sequelize';
import {db} from '../config/db';

export interface UserAttributes {
    id?: number;
    login:string;
    password:string;
    age:number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,UserAttributes {}

export const User = db.define<UserInstance>("UserDetails", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    login:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
 });