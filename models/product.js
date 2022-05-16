const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Product must have a name'],
    },

    price:{
        type:Number,
        required:[true, 'Product must have a price'],
    },

    rating:{
        type:Number,
        default:4.5,
    },

    featured:{
        type:Boolean,
        default:false,
    },

    company:{
        type:String,
        enum:{
            values:['ikea',  'liddy', 'caressa', 'marcos'],
            message: '{value} is not supported'
        }
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model('Product', productSchema)