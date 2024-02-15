import express from 'express'
import ViteExpress from 'vite-express'
import { Thing } from './models/model.js'

let app = express()

app.use(express.json())

app.get('/stuff', async (req, res) => {
    let allThings = await Thing.findAll()
    
    res.send(allThings)
})

ViteExpress.listen(app, 4000, () => {
    console.log('working on 4000')
})