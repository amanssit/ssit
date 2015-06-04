'use strict';

var express = require('express');
var controller = require('./wine.controller');

var router = express.Router();

//GET	/api/wines	Retrieve all wines
router.get('/', controller.Index);
//GET	/api/wines/search/Chateau	Search for wines with ‘Chateau’ in their name
router.get('/search/:name', controller.Search)
//GET	/api/wines/10	Retrieve wine with id == 10
router.get('/:id', controller.GetByID)
//POST	/api/wines	Add a new wine
router.post('/', controller.Add)
//PUT	/api/wines/10	Update wine with id == 10
router.put('/:id', controller.Update)
//DELETE	/api/wines/10	Delete wine with id == 10
router.delete('/:id', controller.Delete)

module.exports = router;
