var people = require("../data/people.js")

module.exports = function(app){
    app.get("/api/people", function(req,res){
        res.json(people)
    })
}