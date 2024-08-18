import express from 'express'
import ejs from 'ejs'
import{dirname,join} from 'path'
import { fileURLToPath } from 'url'
import { title } from 'process'

import indexRoute from './routes/index.js'
import { Conectar } from './service/conexion.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'views'))
app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.use(indexRoute)
app.use(express.static(join(__dirname,'public')))

Conectar()


const port = 3000
app.listen(port)
console.log("El servidor esta siendo escuchado por el puerto 3000");


