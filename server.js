const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./routes/htmlRoutes")

htmlRoutes(app, path)





app.listen(PORT, function(){
    console.log("listening")
})