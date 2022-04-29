// this controller routes the new meme generator page
// express require
const express = require('express');
// set up router
const router = express.Router();

///////////////////////////// MODELS ////////////////////////////////

///////////////////////////// ROUTES /////////////////////////////////

// newMeme get route -> http://localhost:4000/newMeme
router.get('/', (req, res) => {
    return res.render('newMeme/new.ejs')
});

// newMeme show page 
router.get('/:id/', (req, res) => {
    return res.render('newMeme/show.ejs')
})



// newMeme create (post) route -> http://localhost:4000/newMeme
router.post('/', (req, res) => {

    return res.redirect('/newmeme/show/');
});


// export router
module.exports = router;