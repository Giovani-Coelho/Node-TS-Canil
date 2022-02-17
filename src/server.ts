import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"
import mainRoutes from "./routes/index"
// O pathmódulo fornece utilitários para trabalhar com
// caminhos de arquivos e diretórios. Ele pode ser acessado usando:

dotenv.config()

const server = express()

server.set("view engine", "mustache")

// fala onde estao os arquivos dinamicos
server.set("views", path.join(__dirname, "views"))
// O método path.join() une os segmentos de caminho especificados em um caminho.

server.engine("mustache", mustache())
// define qual a engine esta sendo usada

//arquivos estaticos:
server.use(express.static(path.join(__dirname, "../public")))

// Rotas

server.use(mainRoutes)

server.use((req, res) => {
  res.render("pages/404")
})

server.listen(process.env.PORT)
