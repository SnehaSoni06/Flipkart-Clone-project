import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true  // if id is unique then only insert else dont insert in database
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product=mongoose.model('product',productSchema); //to make collection (in mongodb it is collection wwhich is databse only)

export default Product;