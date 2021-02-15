const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bootcampSchema = new Schema({
  title: {
    type : String,
  },
  description : {
      type : String
  },
  image : {
      type : String,
  }
});

module.exports = Bootcamp = mongoose.model('Bootcamp', bootcampSchema);
