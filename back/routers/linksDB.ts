import express from "express";
import cors from "cors";
import LinksDB from '../models/LinksDB';
import mongoose from 'mongoose';


const linksRouter = express.Router();

linksRouter.get("/", async (req, res, next) => {
  console.log("hi")
  try{
    const links = await LinksDB.find();
    return res.send(links);
  }catch(err){
    next(err)
  }
})

linksRouter.get("/:id", async (req, res, next) => {
  try{
    const link = await LinksDB.findById(req.params.id);
    if(link === null){
      return res.status(404).send({error:"No such link with this id"});
    }

    return res.send(link);
  }catch(err){
    next(err)
  }
})

linksRouter.post("/", async (req, res, next) => {

  try{
    const linkMutation ={
      shortUrl: req.body.shortUrl,
      originalUrl: req.body.originalUrl
    }
    const links = new LinksDB(linkMutation);
    await links.save();

    return res.send(links);
  }catch(error){
    if(error instanceof mongoose.Error.ValidationError){
      return res.status(400).send(error)
    }
    next(error);
  }
})



export default linksRouter