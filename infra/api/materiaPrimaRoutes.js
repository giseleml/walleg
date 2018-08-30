const materiaPrimaRepository = require("./../database/materiaPrimaRepository")

module.exports = (app) => {
  app.get("/materiaprima", (request, response) => {
    materiaPrimaRepository.findAll().then((materiaprima) => {
      response.json(materiaprima)
    })
  })

  app.post("/materiaprima", ({ body }, response) => {
    materiaPrimaRepository.create(body)
    response.sendStatus(201)
  })
}
