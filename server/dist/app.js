import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import mongoose from "mongoose";
import cors from "cors";
import userDataRouter from "./Router/userDataRouter.js";
import globalErrorHandler from "./Controller/errController.js";
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const DB = process.env.DATABASE;
mongoose.connect(DB).then((con) => {
    console.log("the mongodb connection is ready....!");
});
app.use("/employee/data", userDataRouter);
app.use(globalErrorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Listening at PORT ${process.env.PORT}....`);
});
//# sourceMappingURL=app.js.map