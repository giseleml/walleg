const kitsRepository = require("./../database/kitsRepository")

module.exports = (app) => {
  app.get("/kits", (request, response) => {
    kitsRepository.findAll().then((kits) => {
      response.json(kits)
    })
  })

  app.post("/kits", ({ body }, response) => {
    kitsRepository.create(body)
    response.sendStatus(201)
  })
}
