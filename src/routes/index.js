import { Router } from "express"
const router = Router()

//Ruta Pagina de Inicio
router.get('/',(req,res)=> res.render('index',{title:'Ecommerce Ferreteria'}))

//Ruta Pagina de Nosotros
router.get('/nosotros',(req,res)=>res.render('about',{title:'Nosotros'}))

//Ruta Pagina de Contacto
router.get('/contacto',(req,res)=>res.render('contacto',{title:'Contacto'}))

//Ruta Pagina de tienda
router.get('/tienda',(req,res)=>res.render('tienda',{title:'Productos Online'}))


export default router
