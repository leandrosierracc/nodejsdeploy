import express from "express";

const app = express()

app.get("/",(req,res) => {
    res.send('<h1>Pagina principal para David y Agus</h1>')
})
app.get("/about",(req,res) => {
    res.send('<h1>Estás en about</h1>')
})

app.listen(3000)

console.log("server funcionandoooo")

