const fornecedoresRepository = require("./../database/fornecedoresRepository")

module.exports = (app) => {
  app.get("/fornecedores", (request, response) => {
    fornecedoresRepository.findAll().then((fornecedores) => {
      response.json(fornecedores)
    })
  })

  app.post("/fornecedores", ({ body }, response) => {
    fornecedoresRepository.create(body)
    response.sendStatus(201)
  })
}
