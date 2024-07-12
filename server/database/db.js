import mongoose from "mongoose";


export const Connection= async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-mhralnk-shard-00-00.siqmdst.mongodb.net:27017,ac-mhralnk-shard-00-01.siqmdst.mongodb.net:27017,ac-mhralnk-shard-00-02.siqmdst.mongodb.net:27017/?ssl=true&replicaSet=atlas-jyjo8g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce`;
    try{

       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log("database connected");

    }catch(error){
        console.log('error while connecting the databse',error.message);
    }
    }
 export default Connection; 