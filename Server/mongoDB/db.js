const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://tompplpt:1234@cluster0.qfsfpfm.mongodb.net/?retryWrites=true&w=majority')
        console.log('connect mongoDB....')
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectDB