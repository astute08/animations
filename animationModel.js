var mongoose = require("mongoose");

var animationSchema = mongoose.Schema(
  {
    id: Number,
    name: String,
    type: String,
    isPublished: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,

  },
  
);


var Animation = mongoose.model("Animation", animationSchema);
module.exports = Animation;
