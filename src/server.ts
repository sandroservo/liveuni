import dotenv from 'dotenv'
dotenv.config()

import { Alunos } from './models/alunos'

import express from 'express'
const router = express.Router()

const app = express()

app.use(express.json())

router.get('/',(req, res) => {
    res.send('hello world!')
})

router.get('/alunos', async (req, res) =>{
    const alunos = await Alunos.findAll()
    return res.json(alunos)
 })

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server running 🚀!!!')
})