exports.homeRoutes=(req,res)=>{
    res.render('index')//no need write the file extendtion and exact path as we set the view engine already
}
exports.add_user= (req,res)=>{
    res.render("add_user"); //no need write the file extendtion and exact path as we set the view engine already
}
exports.update_user=(req, res)=>{
    res.render("update")
}