const vendedoresRepository = require("./../database/vendedoresRepository")

module.exports = (app) => {
  app.get("/vendedores", (request, response) => {
    vendedoresRepository.findAll().then((vendedores) => {
      response.json(vendedores)
    })
  })

  app.post("/vendedores", ({ body }, response) => {
    vendedoresRepository.create(body)
    response.sendStatus(201)
  })
}
