const express= require('express');
const app=express();
const cors=require('cors')

require('dotenv').config();

const port=8000;
const User = require('./models/User')

// this is to import db.js to start connection to the database 
const connectToMongo=require('./db.js');
// yen function ko call kiya h jisko import kiya tha 
connectToMongo();


// now to use req.body we is to use middleware...which will get the data in json format 
app.use(cors());
app.use(express.json());



app.post('/',async (req, res) => {
    try {
      
      const { name, email, mobile , program } = req.body;
      console.log("hello i am here",name);
      const note = await new User({
        name,
        email,
        mobile,
        program,
      });
      const saveNote = await note.save();
      res.json(saveNote);

    //   for phone call 
      var account = process.env.User_Account;
      var token = process.env.User_Token;
      var no = process.env.User_No;

      // +13854626493

      var client = require('twilio')(account,token);
      client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to:`+918192039877`,
        // to:`+91${mobile}`,
        from: no,
      }, function(err, call){
        if(err){
            console.log(err,"error in calling")
        }else{
            console.log("calling")
        }
      })
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  })



// this is to listen the server 
app.listen(port,()=>{
    console.log(`iNotebook backend Listining at http://localhost:${port}`);
})