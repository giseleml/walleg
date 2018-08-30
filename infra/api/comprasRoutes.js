const comprasRepository = require("./../database/comprasRepository")

module.exports = (app) => {
  app.get("/compras", (request, response) => {
    comprasRepository.findAll().then((clientes) => {
      response.json(compras)
    })
  })

  app.post("/compras", ({ body }, response) => {
    clientesRepository.create(body)
    response.sendStatus(201)
  })
}
