import mongoose from "mongoose";
const Scheme = mongoose.Schema;

const LinksDBScheme = new Scheme({
  shortUrl:{
    type:String,
    required:true,
  },
  originalUrl:{
    type:String,
    required:true,
  }
})

const LinksDB = mongoose.model("LinksDB", LinksDBScheme)

export default LinksDB