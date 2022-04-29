// this controller routes the new meme generator page
// express require
const express = require('express');
// set up router
const router = express.Router();

///////////////////////////// MODELS ////////////////////////////////

const db = require('../Models/')

///////////////////////////// ROUTES /////////////////////////////////

// newMeme get route -> http://localhost:4000/newMeme
router.get('/', (req, res) => {
    return res.render('newMeme/new.ejs')
});

// newMeme show page 
router.get('/shownewmeme/', (req, res) => {
    return res.send('hitting new meme show route')
})



// newMeme create (post) route -> http://localhost:4000/newMeme
router.post('/', (req, res) => {
    return res.send('hitting post route');
});


// export router
module.exports = router;