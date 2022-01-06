const express = require('express');
const router = express.Router();

router.get('/info/:name', (req, res) => {
  return res.json({
    params: req.params,
    host: req.hostname,
    headers: req.headers,
  });
});

router.get('/body', (req, res) => {
  return res.json(req.body);
});

module.exports = router;