const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    image_link:{
        type:String,
        require:true
    },
    author_name:{
        type:String,
        require:true
    },
    content:{
        type:String,
         require:true
    },
    portfolio:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);