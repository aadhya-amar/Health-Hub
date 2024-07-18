const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/healthlogin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const cartCollection=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    phone:{
      type:Number,
      required:true
    
    },
    address:{
      type:String,
      required:true
    },
    Country:{
      type:String
      
    },
    City: {
      type:String
   },
   totalQuantity:{
    type:Number
   },
   totalPrice:{
    type:Number
   }
  
  
  })
  const CartCollection = new mongoose.model("CartCollection", cartCollection)
  
  module.exports=CartCollection