const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const candlemodel = require('./models/candle.js');

const app = express();

mongoose.connect("mongodb+srv://YohPaN:Ce37am30j@cluster0.nt74f.mongodb.net/node-angular-database?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to db");
})
.catch(() => {
  console.log("onnection failed")
});

app.use(bodyparser.json());

//set some Header to give access through the CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})

app.post("/api/candles", (req, res, next) => {
  const candle = new candlemodel({
    collectionName: req.body.collectionName,
    itemName: req.body.itemName,
    price: req.body.price,
    photo: req.body.photo
  });
  candle.save().then(result => {
    res.status(200).json({
      message: 'Candle added Successfully',
      candleId: result._id
    });
  });
})

app.get('/api/candles', (req, res, next) => {
  candlemodel.find()
  .then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: 'Candle Fetched Successfully',
      posts: documents
    });
  });
})

/*app.use('/api/CandleCollection', (req, res, next) => {
  const CandleCollection = [
    {
      "id": "1",
      "collectionName": "Sorcière",
      "itemName": "Chaudron",
      "price": 15,
      "photo": ""
    },
    {
      "id": "2",
      "collectionName": "Autre",
      "itemName": "sphere",
      "price": 8,
      "photo": ""
    },
    {
      "id": "3",
      "collectionName": "Autre",
      "itemName": "pellote",
      "price": 6,
      "photo": ""
    },
    {
      "id": "4",
      "collectionName": "Gourmand",
      "itemName": "cupcake",
      "price": 8,
      "photo": ""
    }
  ];

  res.status(200).json({
    message: "this is the first collection of candle",
    CandleCollection: CandleCollection
  });
});*/

module.exports = app;
