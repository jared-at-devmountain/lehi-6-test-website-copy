import express from 'express'
import ViteExpress from 'vite-express'
import { Thing } from './models/model.js'
import dotenv from 'dotenv'

dotenv.config()
let PORT = process.env.PORT

let app = express()

app.use(express.json())

app.get('/stuff', async (req, res) => {
    let allThings = await Thing.findAll()
    
    res.send(allThings.map((obj) => obj.name))
})

ViteExpress.listen(app, PORT, () => {
    console.log('working on ' + PORT)
})