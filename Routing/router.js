const express = require('express')

const Admincontroller = require('../Controller/AdminControl')
const projectcontroller = require('../Controller/projectcontroller')
const usercontroller = require('../Controller/UserController')
const router = new express.Router()

//admin verify

router.post('/login',Admincontroller.adminlogin);

//add post 
router.post('/add' ,projectcontroller.adddata)

//addlaptopdata
router.post('/laptopdata',projectcontroller.addlaptopdata)

//getdata 
router.get('/getalldata',projectcontroller.getdata)


//getdata 
router.get('/getalllapdata',projectcontroller.getlapdata)

//deletsamrtphoendata
router.delete('/removedata/:id',projectcontroller.deltesmartphonedata)

//deletlapphoendata
router.delete('/removelapdata/:id',projectcontroller.deltelapdata)


//adduseremailtpdb
router.post('/adduser',usercontroller.adddatas)

//get user dta
router.get('/getuseremail',usercontroller.getuseremail)

module.exports = router