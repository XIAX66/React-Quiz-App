import express from "express";
import { getAllquizzes, getOneQuiz } from "../controller/quizController.js";

const router = express.Router();

router.route("/").get(getAllquizzes);
router.route("/:id").get(getOneQuiz);

export default router;
