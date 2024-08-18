import pg from 'pg'
const {Client} = pg;


const config = {
    user:'db_ecommerceferreteria_user',
    host:'dpg-cr0lvu3tq21c73cianb0-a.oregon-postgres.render.com',
    database:'db_ecommerceferreteria',
    password:'hLQmnFDwvClvvUpUTnB0BAABGREdfZnU',
    port:5432,
    ssl:{
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente = new Client(config)
    try {
        await cliente.connect()
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(error)
    }
}