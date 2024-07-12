//to show data on frontend
import {products} from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData=async()=>{
    try{
      // await Product.deleteMany({});   //first it will delete the objects and then data will be imported but this is not correct way so go to schema
       await Product.insertMany(products);  //to insert product data (present in data.js) into Product collection
        console.log("data imported successfully");

    } catch(error){
        console.log("error while inserting default data",error.message);

    }

}

export default DefaultData;