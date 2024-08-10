import { Router } from "express"
const router = Router()


router.get('/',(req,res)=> res.render('index',{title:'Ecommerce Ferreteria'}))

router.get('/about',(req,res)=>res.render('about'))

export default router
