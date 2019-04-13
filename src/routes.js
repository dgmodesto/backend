const express = require('express');
const multer = require('multer');
const multerConfig = require('../src/config/multer');


const routes = express.Router();

const BoxController = require('../controllers/BoxController');
const FileController = require('../controllers/FileController');


routes.get("/boxes/:id", BoxController.show);
routes.post("/boxes", BoxController.store);
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), 
FileController.store);


//routes.get('/teste', (req, res) => {
//    res.send('Hello Rocket');
//})


module.exports = routes;