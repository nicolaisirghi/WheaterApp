import express from "express";
import weatherRouter from "./wheater";
const router = express.Router();

router.use("/weather", weatherRouter);

export default router;