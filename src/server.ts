import express from "express"
import router from "./router"    
import morgan from  "morgan"
import { request } from "http";


import { protect } from "./modules/auth";

const app = express();

declare module 'express-serve-static-core' {
  interface Request {
    shh?: string;
  }
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next)=>{
  req.shh="shh";
  next()
})

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.status(200);
  res.json({ message: "hello" });
});

app.use('/api', protect , router);

export default app;
