const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET employees */
router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    const data = response.data.results;
    console.log(response.data.results);
    res.send({employee: data});
  } catch(err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;






