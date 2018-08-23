const express = require("express")
const app = express()
app.use(express.json())

const clientesRoutes = require('./api/clientesRoutes')(app)




app.listen(7777, () => {
  console.log("está escutando com arrow function!")
})
