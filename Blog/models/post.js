const mongoose     =     require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

      

let postSchema = new mongoose.Schema({

    title: String,
    image: String,
    description: String,
    datecreated: {
        type: Date,
        default: Date.now
    }

});
postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", postSchema);