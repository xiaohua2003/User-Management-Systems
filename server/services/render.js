const axios=require('axios')
exports.homeRoutes=(req,res)=>{
    //make a get request to/api/users  
    axios.get("http://localhost:3000/api/users").then(function(response){
     
        res.render('index', {users:response.data})//no need write the file extendtion and exact path as we set the view engine already
    })
    .catch(err=>{
        res.send(err)
    })
    
}
exports.add_user= (req,res)=>{
    res.render("add_user"); //no need write the file extendtion and exact path as we set the view engine already
}
exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}