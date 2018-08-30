const produtosRepository = require("./../database/produtosRepository")

module.exports = (app) => {
  app.get("/produtos", (request, response) => {
    produtosRepository.findAll().then((produtos) => {
      response.json(produtos)
    })
  })

  app.post("/produtos", ({ body }, response) => {
    produtosRepository.create(body)
    response.sendStatus(201)
  })
}
