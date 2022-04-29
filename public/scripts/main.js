console.log('hello front end')

// new meme generator javascript based off of decode example
// link: https://www.youtube.com/watch?v=io5FcMAdLy

// grabbing image input variables
const imageInput = document.querySelector('#imageURL');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
// grabbing canvas, generated image
const canvas = document.querySelector('#meme')

// image variable gets updated every time user selects new image
let image = null;

console.log(imageInput);
const imageInputDefaultText = 'put image URL here'
imageInput.setAttribute('text', imageInputDefaultText)
let URLtext = imageInput.getAttribute('text')
console.log(URLtext)

function updateMemeCanvas(canvas, image, topText, bottomText) {
    console.log(canvas);
    console.log(image);
    console.log(topText);
    console.log(bottomText);
}