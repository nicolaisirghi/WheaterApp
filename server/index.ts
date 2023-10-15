import express from "express";
import "dotenv/config";
import morgan from "morgan";
import Router from "./src/Routes/index";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(Router);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});