import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDb from './src/config/connectDb'

const port = process.env.PORT || 8888
const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDb()

app.listen(port, () => {
  console.log(`Server is running on the ${port}`)
})
