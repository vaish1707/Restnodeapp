var express=require('express');
var moviesRouter=express.Router();

moviesRouter.route('').get(function(req,res){
	res.send("Movies Online");


});

module.exports=moviesRouter;