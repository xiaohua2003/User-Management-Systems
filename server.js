const express=require('express');
const dotenv=require('dotenv');
const morgan=require("morgan");
const app=express();
dotenv.config({path:'config.env'})
app.get('/', (req,res)=>{
    res.send("User Management");
})
const PORT =process.env.PORT||3000
//log requests
app.use(morgan('tiny'))
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})