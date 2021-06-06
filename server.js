const express=require('express');
const dotenv=require('dotenv');
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require('path')
const app=express();
dotenv.config({path:'config.env'})
app.get('/', (req,res)=>{
    res.render("index"); //no need write the file extendtion and exact path as we set the view engine already
})
const PORT =process.env.PORT||3000
//print log requests message
app.use(morgan('tiny'))
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))
//set view engine
app.set("view engine", "ejs")
//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})