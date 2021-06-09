const express=require('express');
const route=express.Router() //create different route in a separate file
const services=require('../services/render')
/**Root Route @method:get */
route.get('/', services.homeRoutes)
/**add user @method:get */
route.get('/add-user',services.add_user)
/**update @method:get */
route.get('/update', services.update_user)
module.exports=route