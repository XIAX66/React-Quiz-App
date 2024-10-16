function Finished({ points, maxPoints, dispatch, data, highScore }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} points(
        {Math.ceil(percentage)}%)!
        {Math.ceil(percentage) >= 50 ? "🎉" : "😢"}
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart", payload: data })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
