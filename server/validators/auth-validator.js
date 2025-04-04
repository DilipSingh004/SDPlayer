const {z}=require("zod")
//creating a object schema
const signupSchema=z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be atleast 3 char"})
    .max(255,{message:"name must be atleast 255 char"}),
    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email"})
    .min(3,{message:"email must be atleast 3 char"})
    .max(255,{message:"email must be atleast 255 char"}),
    password:z
    .string({required_error:"password is required"})
    .min(8,{message:"password must be atleast 8 char"})
    .max(16,{message:"password must be atleast 16 char"}),
})
module.exports=signupSchema;