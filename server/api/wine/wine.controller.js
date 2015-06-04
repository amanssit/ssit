'use strict';

var _ = require('lodash');
var  GetAllWines = require("./wine.model")

// Get list of wines
exports.Index = function (req, res) {
  GetAllWines(function(err,data){
    if(!err)
      res.json(data);
  })

};

// Search wines
exports.Search = function (req, res) {
  res.json([]);
};

// Get a  wine by ID
exports.GetByID = function (req, res) {
  res.json([]);
};

// Add a wine
exports.Add = function (req, res) {
  res.json([]);
};

// Update wine based on ID
exports.Update = function (req, res) {
  res.json([]);
};

// Delete Wine Based on ID
exports.Delete = function (req, res) {
  res.json([]);
};
