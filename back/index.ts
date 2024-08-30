import express from "express";
import linksRouter from './routers/linksDB';
import cors from 'cors';
import config from './config';
import mongoose from 'mongoose';

const app = express();
const port = 8000;


app.use(cors(config.corsOptions))
app.use(express.json());
app.use("/links", linksRouter);


const run =async()=>{
  await mongoose.connect("mongodb://localhost/links");

  app.listen(port, () => console.log(`Server running on port: ${port}`));

  process.on("exit", () => {
    mongoose.disconnect();
  });
}

run().catch(console.error);
