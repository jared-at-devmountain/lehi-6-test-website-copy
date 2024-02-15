import { sequelize, Thing } from '../models/model.js'

const newThings = [
    {
        name: 'motorboat'
    },
    {
        name: 'saxophone'
    },
    {
        name: 'bonnet'
    }
]

await sequelize.sync({ force: true })

await Thing.bulkCreate(newThings)

await sequelize.close()
