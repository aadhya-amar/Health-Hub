const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const LoginCollection=require("./mongodb")
const CartCollection=require("./mongodb1")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000

const templatepath=path.join(__dirname,'../templates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatepath)
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/login",(req,res)=>{
  res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/cart",(req,res)=>{
  res.render("cart")
})
app.get("/checkout",(req,res)=>{
  res.render("checkout")
})
app.get("/cart",(req,res)=>{
  res.render("cart")
})
app.get("/aboutus",(req,res)=>{
  res.render("aboutus")
})
app.post('/signup',async(req,res)=>{
  const data={
    name:req.body.name,
    password:req.body.password
  }

  await LoginCollection.insertMany([data]);

  res.render("home")
})

app.post('/login',async(req,res)=>{
   const {name,password} = req.body;
   const result = await LoginCollection.findOne({name});
   if(!result)
   {
    res.render("login",{msg:"New User"});
   }
   else if (result.password!=password)
   {
    res.render("login",{credentialmsg:"Wrong Credentials"});
   }
   else {
    res.render("home");
   }
})

app.post("/checkout",async(req,res)=>{
  const data={
    name:req.body.name,
    phone:req.body.phone,
    address:req.body.address,
    Country:req.body.Country,
    City:req.body.City,
    totalQuantity:req.body.totalQuantity,
    totalPrice:req.body.totalPrice
  }

  await CartCollection.insertMany([data]);


  res.render("home")
})


app.listen(3000,()=>{
    console.log("port connected");
})
