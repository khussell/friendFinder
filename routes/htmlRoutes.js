
module.exports = function(app, path){

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "../public/main.html"))
})

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

}