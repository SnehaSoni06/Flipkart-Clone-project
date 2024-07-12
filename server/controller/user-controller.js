//backend API
import User from '../model/user-schema.js';

export const userSignup= async(request,response)=>{
    try{

        const exist=await User.findOne({username:request.body.username}) //username ke body me aane wala username 
        if(exist){
        return response.status(401).json({message:'Username already exists'})
        }
        const user = new User(request.body);
        await user.save();

        response.status(200).json({message:user});

    } catch(error){
        // response.status(500).json({message:error.message});
    }

}