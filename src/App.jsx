// import Footer from "./Footer";
import { useEffect, useReducer, useRef } from "react";
import Header from "./Header";
import Maintain from "./Maintain";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Process from "./Process";
import Question from "./Question";
import Footer from "./Footer";
import NextButton from "./NextButton";
import Finished from "./Finished";
import Timer from "./Timer";

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  status: "loading",
  secondsRemaining: null,
};

const SEC_PER_QUESTION = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      if (state.index < state.questions.length - 1)
        return {
          ...state,
          answer: null,
          index: state.index + 1,
        };
      else
        return {
          ...state,
          highScore:
            state.highScore > state.points ? state.highScore : state.points,
          status: "finished",
        };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secontsRemaining === 0 ? "finished" : state.status,
      };
    case "restart":
      return {
        ...initialState,
        highScore: state.highScore,
        status: "ready",
        questions: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );
  const data = useRef({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/quizzes")
      .then((response) => {
        data.current = response.data.data.quizzes;
        dispatch({ type: "dataReceived", payload: data.current });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Maintain>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Process
              numQuestions={numQuestions}
              maxPoints={maxPoints}
              points={points}
              index={index}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finished
            data={data.current}
            points={points}
            maxPoints={maxPoints}
            dispatch={dispatch}
            highScore={highScore}
          />
        )}
      </Maintain>
    </div>
  );
}

export default App;
