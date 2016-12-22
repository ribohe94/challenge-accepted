/**
 * Created by ribohe94 on 17/12/16.
 */
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/express/views/';
app.use(express.static(__dirname));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/lux",function(req,res){
  res.sendFile(path + "lux.html");
});

router.get("/touch",function(req,res){
  res.sendFile(path + "touch.html");
});

router.get("/temp",function(req,res){
  res.sendFile(path + "temp.html");
});

app.use("/",router);

/*app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});