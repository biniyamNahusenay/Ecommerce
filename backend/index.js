const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const SchemaUser = require("./model/SchemaUser")
const ProductScehma = require("./model/ProductSchema")
const env = require("dotenv").config()  // you have to add this () otherwise errorConfused comes
const app = express()

app.use(cors())
app.use(express.json({limit:"10mb"}))

const PORT = process.env.PORT

try{
      mongoose.connect(process.env.mongo_url)
    console.log("mongodb connected")
 }catch(err){
     console.log(err)
     process.exit(1)
 }

app.post("/signUp",async (req,res)=>{
    try { 
        const {email} = req.body
        const user = await SchemaUser.findOne({email})
        if(user){
            res.json({message:"user already exist",alert:false})
        }else
        {
            const userData = new SchemaUser(req.body)
            await userData.save()
            res.json({message:"user signedUp success",alert:true})
        }
    } catch (error) {
        res.json({message:error})
    }
})

app.post("/login",async (req,res)=>{
    try { 
        const {email,password} = req.body
        const user = await SchemaUser.findOne({email})
        if(user.password === password){
        const userData = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
        }
            res.json({userData,message:"user logged in success",alert:true,})
        }else{
            res.json({message:"user doesn't exist",alert:false})
            console.log("user doesn't exist")
        }
    } catch (error) {
        res.json({message:error})
    }
})

app.post("/product",async (req,res)=>{
  const Product = new ProductScehma(req.body)
   await Product.save()
  res.json({message:"sended success"})
})

app.get("/product",async(req,res)=>{
    const product = await ProductScehma.find()
    res.json(product)
})
app.listen(PORT,console.log("server listened"))