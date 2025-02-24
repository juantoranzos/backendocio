import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import './src/database/dbConnection'
import productosRoutes from './src/routes/productos.routes'
import usuarioRoutes from './src/routes/usuarios.routes'
import path from 'path'

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
app.use(cors({
    origin: "https://famous-croquembouche-8c9fa9.netlify.app/", // Reemplaza con la URL de tu frontend en Netlify
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}))//conexiones remotas
app.use(express.json()) //interpreta el formato json
app.use(express.urlencoded({ extended: true })) // permite en el objeto request los strings y arrays
app.use(morgan('dev')); //nos da info extra en la terminal
app.use(express.static(path.join(__dirname, '/public')))
//rutas
//http://localhost:4000/apiocio/productos
//http://localhost:4000/apiocio/auth
app.use("/apiocio", productosRoutes);
app.use("/apiocio/auth", usuarioRoutes);
