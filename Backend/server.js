const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const Items = require('./models/Items.model')
const productRouter = require('./Routes/Item')


const app = express()
const port = process.env.PORT || 4000;
app.use(cors())

//console.log(Items)

app.use(express.json())

//app.use(express.static('public'))

const uri = process.env.ATLAS_URI;
mongoose.connect( uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Route to Create Items.create()

  app.use('/Items', productRouter)




app.listen(port, ()=>{console.log(`running on ${port}`)})

