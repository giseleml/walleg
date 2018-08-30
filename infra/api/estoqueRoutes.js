const estoqueRepository = require("./../database/estoqueRepository")

module.exports = (app) => {
  app.get("/estoque", (request, response) => {
    estoqueRepository.findAll().then((estoque) => {
      response.json(estoque)
    })
  })

  app.post("/estoque", ({ body }, response) => {
    estoqueRepository.create(body)
    response.sendStatus(201)
  })
}
