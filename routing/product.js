const express = require('express');
const path = require('path');
const fs = require('fs');
const { STATUS_CODE } = require('../constants/statusCode');
const renderNewProductPage = require('../views/renderNewProductPage');

const router = express.Router();

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

router.post('/add', (req, res) => {
  const { name, description } = req.body;
  const formData = [`name: ${name}`, `description: ${description}`];
  
  fs.writeFile(
    "product.txt",
    `${formData[0]}, ${formData[1]}`,
    (err) => {
      res.status(STATUS_CODE.FOUND);
      res.setHeader('Location', '/product/new');
      return res.end();
    }
  );
});

router.get('/new', (req, res) => {
  fs.readFile('./product.txt', 'utf-8', (err, data) => {
    if (err) {
      return res.send(renderNewProductPage());
    }
    return res.send(renderNewProductPage(data));
  });
});

module.exports = router;