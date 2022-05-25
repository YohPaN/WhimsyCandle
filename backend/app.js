const express = require('express');
const app = express();

app.use('/api/CandleCollection', (req, res, next) => {
  const CandleCollection = [
    {
      "collectionName": "Sorcière",
      "itemName": "Chaudron",
      "price": 15
    },

    {
      "collectionName": "Autre",
      "itemName": "sphere",
      "price": 8
    },
    {
      "collectionName": "Autre",
      "itemName": "pellote",
      "price": 6
    },

    {
      "collectionName": "Gourmand",
      "itemName": "cupcake",
      "price": 8
    }
  ];
  res.status(200).json({
    message: "this is the first collection of candle",
    CandleCollection: CandleCollection
  });
});

module.exports = app;
