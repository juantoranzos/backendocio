import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import './src/database/dbConnection'
import productosRoutes from './src/routes/productos.routes'
//crear un puerto
// crear una instancia de express
dotenv.config() //sirve para leer variables de entorno 
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log(`El servidor esta corriendo en el puerto ${app.get('port')}`);
});
//middlwares, funciones que ejecutan una tarea
 app.use(cors())//conexiones remotas
 app.use(express.json()) //interpreta el formato json
 app.use(express.urlencoded({extended: true})) // permite en el objeto request los strings y arrays
 app.use(morgan('dev')); //nos da info extra en la terminal
//rutas
//http://localhost:4000/apiocio/productos
app.use("/apiocio", productosRoutes)

