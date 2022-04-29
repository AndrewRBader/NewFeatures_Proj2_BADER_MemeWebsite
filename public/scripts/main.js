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
    },
    // just load once, don't need to continuously check for loading
    {once:true});
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
    const context = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;

    // Update canvas background
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);
};