const User=require("../models/user-model")
const bcrypt =require("bcryptjs");

const home =async (req,res)=>{
    try {
        res
        .status(200)
        .send("welcome to my music player")
    } catch (error) {
        console.log(error);
        
    }
}

// user register logic

const register = async (req,res)=>{
    try {

        console.log(req.body);

        const {username, email ,password} =req.body;
        // for email
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }
        // hash the password
        const saltRound=8;
        const hash_password= await bcrypt.hash(password,saltRound)

        const userCreated =await User.create({
            username,
             email ,
             password:hash_password
            });

        res.status(201).json({
           msg:"registration Successful", 
           token:await userCreated.generateToken(),
           userId:userCreated._id.toString(),
       });
    } catch (error) {
        // res.status(500).json("internal server error")
        next(error);
        
    }
}

//user login logic

const login=async(req,res)=>{
try {
    const {email,password}=req.body;

    const userExist=await User.findOne({ email});
    console.log(userExist);

    if(!userExist){
        return res.status(400)
        .json({message:"invalid Credential"});
    }

     const user=await bcrypt.compare(password,userExist.password);

    if(user){

        res.status(201).json({
            msg:"Login Successful", 
            token:await userExist.generateToken(),
            userId:userExist._id.toString(),
        })
    }else{
        res.status(401)
        .json({message:"Invalid Email or Password"})
    }
     
} catch (error) {
    res.status(500)
    .json("internal server error")
}
}


module.exports={home,register,login}