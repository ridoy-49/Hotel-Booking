import express from "express";
import "dotenv/config";
import cors from "cors"
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebHooks.js";




connectDB();

const app = express();
app.use(cors());

//Middleware
app.use(express.json());
app.use(clerkMiddleware())

//api to listen clerkwebhooks

app.use("/api/clerk", clerkWebhooks)

app.get('/', (req, res)=>{res.send("Api test server is working")})


const PORT =process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server Running on ${PORT}`));



