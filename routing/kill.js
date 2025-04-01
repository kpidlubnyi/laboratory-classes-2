const express = require('express');
const logger = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(logger.getProcessLog());
  process.exit();
});

module.exports = router;