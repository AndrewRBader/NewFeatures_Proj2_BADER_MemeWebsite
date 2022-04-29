// require mongoose in schema file
const mongoose = require('mongoose');



//generated meme schema:

const generatedMemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'schema needs a title']
    },
    image: {
        type: Object,
        required: true
    },
    description: {
        type: String,
        required: [true, 'please input description of the meme']
    }
},
{
    timestamps: true
});

// mongoose model instance of meme schema
const GeneratedMeme = mongoose.model('GeneratedMeme', generatedMemeSchema);
// export the meme schema
module.exports = GeneratedMeme;