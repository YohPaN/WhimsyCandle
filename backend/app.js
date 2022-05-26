const express = require('express');
const app = express();

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

app.use('/api/CandleCollection', (req, res, next) => {
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
});

module.exports = app;
