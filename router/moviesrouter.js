var express=require('express');
var movies=express.Router();
var moviesController=require('./../controllers/moviescontroller');

movies.route('').get(moviesController.moviescontroller)
.post(moviesController.addingcontroller);
movies.route('/:id').get(moviesController.getbyId)
.put(moviesController.updateId);

module.exports=movies;