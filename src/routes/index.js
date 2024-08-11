import { Router } from "express";
const router = Router();

//Ruta Pagina de Inicio
router.get("/", (req, res) =>
  res.render("index", { title: "Ecommerce Ferreteria" })
);

//Ruta Pagina de Nosotros
router.get("/about", (req, res) => res.render("about", { title: "Nosotros" }));

//Ruta Pagina de Contacto
router.get("/contacto", (req, res) =>
  res.render("contacto", { title: "Contacto" })
);

//Ruta Pagina de tienda
router.get("/tienda", (req, res) =>
  res.render("tienda", { title: "Productos Online" })
);

//Ruta Pagina de Login
router.get("/login", (req, res) => res.render("login", { title: "Login" }));

//Ruta Pagina de detalles
router.get('/detalles',(req,res)=>res.render('detalles',{title:'Detalles del Producto'}))

export default router;
