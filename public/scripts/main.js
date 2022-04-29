console.log('hello front end')

// Adapted from: new meme generator decode example
// link: https://www.youtube.com/watch?v=io5FcMAdLy

// grabbing image input variables
const imageInput = document.querySelector('#imageURL');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
// grabbing canvas, generated image
const canvas = document.querySelector('#meme')

// image variable gets updated every time user selects new image
let image = null;

imageInput.addEventListener('change', ()=>{
    // collecting the image URL variable
    const imgURL = imageInput.value
    console.log(imgURL)
    // set new image here and set the src to inputed imgURL
    image = new Image();
    image.src = imgURL;
    // event listener (ie set inverval) to wait for loading then calls updateMemeCanvas function
    image.addEventListener("load", () => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    });
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
    console.log(canvas);
    console.log(image);
    console.log(topText);
    console.log(bottomText);
};