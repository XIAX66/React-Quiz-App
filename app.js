import express from "express";
import morgan from "morgan";
import quizRouter from "./routes/quizRoutes.js";
import cors from "cors";

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/quizzes", quizRouter);

export default app;
