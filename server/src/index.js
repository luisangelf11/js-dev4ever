import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import NotasRouter from './routes/routes.js'

const app = express();

app.set('PORT', 3000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: 'Hola amigios de JS!'})
})

app.use(NotasRouter)

app.listen(app.get('PORT'))
console.log(`Server running on port`, app.get('PORT'))