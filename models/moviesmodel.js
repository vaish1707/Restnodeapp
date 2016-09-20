var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var mongoosemodel=new Schema({

	title:String,
	moviename:String,
	rating:Number,
	isReleased:{type:Boolean,default:true}
});

module.exports=mongoose.model("Movie",mongoosemodel);