import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/browser.route.js";
import { __pathname } from "./config/path.js";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT ?? 8080;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
    console.log(`Server running in port ${port}. . . . .`);
});