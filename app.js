var express=require('express');
var app=express();
var moviesRouter=require('./router/moviesrouter');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var mongodb=mongoose.connect("mongodb://localhost/Moviesdb")
app.use('/movie',moviesRouter);
app.use(bodyParser.json());
app.listen(3000,function(){
	console.log("Listening");
});