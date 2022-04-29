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
    // set context of canvas
    const context = canvas.getContext('2d');
    // collect image width in variable
    const width = image.width;
    // collect image height in variable
    const height = image.height;
    // setting text
    // basing font size off of the width of the image
    const fontSize = Math.floor(width / 10);
    // space between top of image and bottom
    const yOffset = height / 25;

    // Update canvas background with image specs
    // set width of canvas to width of image
    canvas.width = width;
    // set height of canvas to height of image
    canvas.height = height;
    context.drawImage(image, 0, 0);

    // Prepare text
    context.strokeStyle = 'black';
    // border/text stroke width
    context.lineWidth = Math.floor(fontSize / 4);
    // text fill style
    context.fillStyle = "white";
    // no weird anomolies in text
    context.lineJoin = "round";
    // adaptable context
    context.font = `${fontSize}px sans-serif`;

    // adding the top text
    // text adheres to yOffset
    context.textBaseline = "top";
    // setting top text positon to halfway vs yOffset value
    context.strokeText(topText, width / 8, yOffset);
    context.fillText(topText, width / 8, yOffset);

};