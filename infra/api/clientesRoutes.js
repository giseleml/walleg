const clientesRepository = require("./../database/clientesRepository")

module.exports = (app) => {
  app.get("/clientes", (request, response) => {
    clientesRepository.findAll().then((clientes) => {
      response.json(clientes)
    })
  })

  app.post("/clientes", ({ body }, response) => {
    clientesRepository.create(body)
    response.sendStatus(201)
  })
}
