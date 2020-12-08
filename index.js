const express= require('express')
const bodyParser = require('body-Parser')
const mongoose = require('mongoose')
const postRouter = require('./controllers/post')
const app = express()
require('dotenv').config()

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}


mongoose.connect(process.env.MONGODB_URI,config)
.then(()=>{
    console.log("successfully connected to MongoDB")
})

.catch(err=> {
    console.error("some problem occured", err)
  })

  app.use(bodyParser.json());
  app.use('/post', postRouter)

  app.listen(process.env.PORT,()=>{
    console.log("Express app is working")
  })
