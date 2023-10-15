import express from "express";
import Weather from "../Controllers/weather";

const router = express.Router();

router.get("/", Weather.getWeather);

export default router;