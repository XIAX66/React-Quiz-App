import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "../model/quizModel.js";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB)
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful!");
  });

const quizzes = JSON.parse(
  fs.readFileSync("./data/questions.json"),
  "utf-8"
).questions;

const importData = async () => {
  try {
    await Quiz.create(quizzes);
    console.log("Data successful created!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Quiz.deleteMany();
    console.log("Data successful deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
