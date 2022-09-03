import { sequelize } from '../database';

import { DataTypes, Model } from 'sequelize'


export interface AlunosInstance extends Model {
    id: number
    name: string
    bio: string
    email: string

}

export const Alunos = sequelize.define<AlunosInstance>(
    'alunos',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: DataTypes.TEXT,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },


    }


)