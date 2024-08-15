import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import expressOasGenerator from "@mickeymond/express-oas-generator";
import cors from "cors";
import userRouter from "./router/user_router.js";
import bmiRouter from "./router/bmi_router.js";
import { recommendationRouter } from "./router/recommendation.js";





await mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("database connected")
);

 
const liveup = express();

expressOasGenerator.handleResponses(liveup, {
    alwaysServeDocs: true,
    mongooseModels: mongoose.modelNames
});


liveup.use(express.json());
liveup.use(cors({credentials: true, origin: "*"}));
liveup.use(express.static("liveup"));
liveup.use("/api/v1", userRouter);
liveup.use("/api/v1", bmiRouter);
liveup.use("api/v1", recommendationRouter)


expressOasGenerator.handleRequests()
liveup.use((req, res) => {
    res.redirect("/api-docs/")
})


const port = process.env.PORT || 3000
liveup.listen(port, () =>{
    console.log(`liveup is running on port ${port}`)
});
