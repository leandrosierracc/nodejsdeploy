import express from "express";

const app = express()

app.get("/",(req,res) => {
    res.send('<h1>Qué grande Cocituber (dedicado a Agus)</h1><img style="height:300px;" src="https://images.ecestaticos.com/OmyWD88WG5a_p0a-PpUp75yKXeg=/0x0:900x506/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3c5%2F957%2Fa89%2F3c5957a89aad96a4f36d6f590536bcff.jpg">')
})
app.get("/about",(req,res) => {
    res.send('<h1>Estás en about</h1>')
})

app.listen(3000)

console.log("server funcionandoooo")

