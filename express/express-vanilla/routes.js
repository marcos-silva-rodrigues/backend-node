const express = require('express');
const router = express.Router();

router.get('/info/:name', (req, res) => {
  return res.json({
    params: req.params,
    host: req.hostname,
    headers: req.headers,
  });
});

router.post('/body', (req, res) => {
  return res.json(req.body);
});

router.get('/error', (req, res, next) => {
  return next(new Error('custom error'));
});

router.use((err, req, res, next) => {
  return res.status(500).json({
    message: 'custom error middleware'
  });
});

module.exports = router;