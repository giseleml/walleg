const transportadorasRepository = require("./../database/transportadorasRepository")

module.exports = (app) => {
  app.get("/transportadoras", (request, response) => {
    transportadorasRepository.findAll().then((transportadoras) => {
      response.json(transportadoras)
    })
  })

  app.post("/transportadoras", ({ body }, response) => {
    transportadorasRepository.create(body)
    response.sendStatus(201)
  })
}
