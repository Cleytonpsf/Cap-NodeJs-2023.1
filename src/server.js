//importação do express
const express = require("express")
// instancia do express iniciada
const app = express()

const routes = require("./routes")

app.use(express.json())
app.use("/api", routes)
// porta em que o servidor está ouvindo
app.listen("8080", ()=>{
    // mensagem que é printada quando o servidor "sobe"
    console.log("Servidor rodando");
})

//http://localhost:8080/api