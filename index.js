var express = require("express")
var csv = require('csvtojson')
var path = require('path')

var app = express()

app.get('/footballPlayers', function(req, res) {
	var json_string = {"players":[
            {"name":"Messi", "goals":8},            
            {"name":"Ronaldo", "goals":22},
            {"name":"Costa", "goals":20},
            {"name":"Neymar", "goals":13},
            {"name":"Arabi", "goals":6},
            {"name":"Bale", "goals":3},
            {"name":"Toquero", "goals":0}]};
  res.json(json_string)
})
 
const csvFilePath =('C:\\Users\\IP-NB-2020-0045\\Desktop\\MyApi\\myFile0.csv')

app.get('/generate', function(req, res) {
  csv().fromFile(csvFilePath).then((jsonObj)=>{
    console.log(jsonObj);   
 return res.json(jsonObj)
  })
})


app.listen(3000)