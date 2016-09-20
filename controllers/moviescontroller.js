var movieModel=require('./../models/moviesmodel');


var moviescontroller=function(req,res){

	movieModel.find(function(err,Movie){
		if(err){
			res.status(500);
			res.send("Internal Server Error");
		}
		else{
			res.status(200);
			res.send(Movie);
		}
	});


};

var addingcontroller=function(req,res){
	var movies=new movieModel(req.body);
	movies.add(function(err){
			if(err){
			res.status(500);
			res.send("Internal Server Error");
		}
		else{
			res.status(200);
			res.send(movies);
		}
	});
};

var getbyId=function(req,res){
	movieModel.findById(req.params.id,function(err,Movie){
        if(err){
			res.status(500);
			res.send("Internal Server Error");
		}
		else{
			res.status(200);
			res.send(Movie);
		}
	});
};

var updateId=function(req,res){

movieModel.findById(req.params.id,function(err,result){

	if(err){
			res.status(500);
			res.send("Internal Server Error");
		}
		else{

			result.title:req.body.title,
	result.moviename:req.body.moviename,
	result.rating:req.body.rating,
	result.isReleased:req.body.isReleased

	movieModel.save(function(err)
{
	 if(err){
			res.status(500);
			res.send("Internal Server Error");
		}
		else{
			res.status(200);
			res.send(result);
		}

});
			
		}
});

};


module.exports=
{
	moviescontroller:moviescontroller

addingcontroller:addingcontroller
getbyId:getbyId
updateId:updateId
}