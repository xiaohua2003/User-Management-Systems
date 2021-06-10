const express=require('express');
const route=express.Router() //create different route in a separate file
const services=require('../services/render')
const controller=require('../controller/controller')
/**Root Route @method:get */
route.get('/', services.homeRoutes)
/**add user @method:get */
route.get('/add-user',services.add_user)
/**update @method:get */
route.get('/update', services.update_user)
//API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('api/users/:id', controller.delete)

module.exports=route