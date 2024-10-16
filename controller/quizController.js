import Quiz from "../model/quizModel.js";

const getAllquizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select("-__v");

    res.status(200).json({
      status: "success",
      result: quizzes.length,
      data: { quizzes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getOneQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).select("-__v");

  try {
    res.status(200).json({
      status: "success",
      data: { quiz },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export { getAllquizzes, getOneQuiz };
