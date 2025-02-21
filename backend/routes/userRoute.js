const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require("../models/usermodel")

//create API
router.post("/addData", async (req, res) => {

    try {
        const { name, email, age } = req.body;
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userAdded)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }

})

router.get("/getData", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    }
    catch(err) {
        console.log(err)
        res.status(404).json({message:err})
    }

});

router.get("/getData/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const showSingle = await User.findById({_id :id});
        res.status(200).json(showSingle)
    }   
    catch(err){
        console.log(err)
        res.status(500).json({error : err.message})
    }
});

router.delete('/deleteData/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const userData = await User.findByIdAndDelete({_id : id})
        res.status(201).json({Message :`${id} deleted successfully`})
    }catch(err){
        console.log(err)
        res.status(500).json({error : err.message})
    }
});

router.patch('/updateData/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const {name , email ,age} = req.body;
        const UpdateuserData = await User.findByIdAndUpdate(id , req.body,{
            new:true,
        });
        res.status(201).json(UpdateuserData)
    }catch(err){
        console.log(err)
        res.status(500).json({error : err.message})
    }
});

module.exports = router


