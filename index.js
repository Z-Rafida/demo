import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import expressOasGenerator from "@mickeymond/express-oas-generator";
import cors from "cors";
import userRouter from "./router/user_router.js";
import bmiRouter from "./router/bmi_router.js";
import { recommendationRouter } from "./router/recommendation.js";
import categoryRouter from "./router/category_router.js";
import { restartServer } from "./restart_server.js";



 
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
liveup.use("/api/v1", recommendationRouter);
liveup.use("/api/v1", categoryRouter);

liveup.get("/api/v1/health", (req, res) => {
    res.json({status: "UP"});
});
expressOasGenerator.handleRequests()
liveup.use((req, res) => {
    res.redirect("/api-docs/")
})

const reboot = async() => {
    setInterval(restartServer, process.env.INTERVAL)
}

await mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    const port = process.env.PORT
    liveup.listen(port, () => {
        reboot().then(() => {
            console.log(`Server restarted`);
        });
        console.log(`Server is connected to port ${port}`)
    })
})
.catch((err) => {
    console.log(err);
    process.exist(-1);
});

