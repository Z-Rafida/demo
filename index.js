import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./router/user_router.js";
import bmiRouter from "./router/bmi_router.js";

await mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("database connected")
);


const liveup = express();

liveup.use(express.json());
liveup.use("/api/v1", userRouter);
liveup.use("/api/v1", bmiRouter);

const port = process.env.PORT || 3000
liveup.listen(port, () =>{
    console.log(`liveup is running on port ${port}`)
});
