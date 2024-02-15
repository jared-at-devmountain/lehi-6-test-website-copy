import Sequelize, { DataTypes, Model } from 'sequelize'

const sequelize = new Sequelize('postgresql:///test_db')

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