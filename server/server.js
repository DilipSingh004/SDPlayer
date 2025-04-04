require("dotenv").config();
const express =require("express");
const app =express();
const cors=require("cors")
const authRoute =require("./router/auth-router");
const contactRoute=require("./router/contact-router")
const connectDb=require("./utils/db");
const errorMiddleware=require("./middlewares/error-middleware")

// handle cors

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials:true,
}
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);


const PORT=5000;

connectDb().then(()=>{
    app.listen(PORT, () => {
    console.log(`servere is running at port : ${PORT}`);    
});
});