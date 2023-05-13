const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB =require('./mongoDB/db')
const app = express();
const port =4040
const {readdirSync}=require('fs')
connectDB()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.listen(port,()=>console.log(`Server Running on ${port}`))
readdirSync('./Routes').map((r)=> app.use(require('./Routes/'+r)))