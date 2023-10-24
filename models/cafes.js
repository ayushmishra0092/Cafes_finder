const mongoose = require('mongoose');

const { Schema } = mongoose;

const cafeschema = new Schema({
    cafename : {
        type : String , 
        required : true
    }
    ,
    cafeowner : {
        type : String,
        // required : true
    },
    cafeaddress : {
        type : String,
        // required : true
    },
    cafedescription: {
        type : String 
    },
    cafeclosing : {
        type : Number
    },
    cafeimage : {
        type : String
    }
});

const Cafe = mongoose.model('Cafe', cafeschema);
module.exports=Cafe;