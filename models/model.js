import Sequelize, { DataTypes, Model } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
let DB_URL = process.env.DB_URL

const sequelize = new Sequelize(DB_URL)

class Thing extends Model {}

Thing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'things',
        sequelize: sequelize,
        timestamps: false
    }
)

export { sequelize, Thing }