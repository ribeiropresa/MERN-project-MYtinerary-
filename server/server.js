const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");

//express-validator
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

  app.listen(port, () => {
        console.log("Server is running on " + port + "port");
  });

  //Routes
  app.use('/cities', require('./routes/cities'));
  //ask if this route is needed
  app.use('/itineraries', require('./routes/itineraries'));
  app.use('/users', require('./routes/users'));
  app.use('/auth', require('./routes/auth'))

































    // const MongoClient = require('mongodb').MongoClient
    // var ObjectID = require('mongodb').ObjectID; // we will use this later


    
// db = 'mongodb+srv://CarlosRibeiro:11223344.Scp@merncluster-4zefl.mongodb.net/test?retryWrites=true&w=majority'
// MongoClient.connect(db, (err, db) => {


    
//   const dbase = db.db("mern-project");
//   if (err) return console.log(err)

//   //crud operations..
//   //. this the 'c' (create) operation, that uses POST
//   app.post('/cities/add', (req, res, next) => {

//   const newCity = {city,country,image} = req.body

//     dbase.collection("cities").save(newCity, (err, result) => {
//       if(err) {
//         console.log(err);
//       }

//       res.send('city added successfully');
//     });
//   });

//   //. this the 'r'(read) operation, that uses GET
//   app.get("/cities", (req,res) => {
//     dbase.collection('cities').find().toArray( (err, cities) => {
//       if (err)
//         return res.send({
//           success: false,
//           message: 'Error Found: Something went wrong'
//         })
//       return res.send({
//         success: true,
//         cities
//       })
//     });
//   })

//   //. this the 'u'(update) operation, that uses PUT
//   app.put('/cities/update/:city', (req, res, next) => {
//     let cityToUpdate = req.params.city;
//     const {city, country, image} = req.body;
//     //console.log(req.body)
//     dbase.collection("cities").updateOne({city: cityToUpdate}, {$set:{
//       'city': city,
//       'country': country, 
//       'image': image
//     }}, (err, result) => {
//       if(err) {
//         throw err;
//       }
//       res.send('user updated sucessfully');
//     });
//   });

//   //. this the 'd'(delete) operation, that uses DELETE
//   app.delete('/cities/delete/:city', (req, res, next) => {
//     let deleteCity = {city: city};

//     dbase.collection('cities').deleteOne(deleteCity, (err, result) => {
//       if(err) {
//         throw err;
//       }

//       res.send('user deleted');
//     });
//  });

// })