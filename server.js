const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./routes/htmlRoutes")
var people = require("./data/people.js")
var apiRoutes = require("./routes/apiRoutes")

htmlRoutes(app, path)
apiRoutes(app)

app.post("/api/people", function (req, res) {
    var newPerson = req.body
    people.push(newPerson)
})


app.listen(PORT, function () {
    console.log("listening")
})