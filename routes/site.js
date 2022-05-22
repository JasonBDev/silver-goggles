const express = require('express');
const router = express.Router();



router.get('/username', (req, res) => {
    const pageTitle = 'username';
    res.render('accordions/show', { pageTitle });
});











module.exports = router;