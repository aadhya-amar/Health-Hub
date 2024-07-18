// const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/HealthLogin")
// .then(()=>{
//     console.log('mongodb connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })
const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/healthlogin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const logInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const LoginCollection = new mongoose.model("LoginCollection", logInSchema)

module.exports=LoginCollection

