import { useState } from "react";
import { fetchQuestions } from "./api";
import { Difficulty } from "./api";
import { QuestionState } from "./api";
import { Qcard } from "./components/Qcard";
import { Button, Typography } from "@mui/material";

function App() {
  const [gameover, setgameover] = useState(true);
  const [loading, setloading] = useState(false);
  const [score, setscore] = useState(0);
  const [questions, setquestions] = useState<QuestionState[]>([]);
  const [numberr, setnumberr] = useState(0);
  const totalQuestions = 10;

  const startGame = async () => {
    setloading(true);
    setgameover(false);
    let currQuestions = await fetchQuestions(totalQuestions, Difficulty.EASY);
    setquestions(currQuestions);
    setloading(false);
  };
  const checkAnswer = (id: string) => {
    if (id == questions[numberr].correct_answer) {
      setnumberr(numberr + 1);
      setscore(score + 1);
      if (score == 10) {
        alert("7 crore");
        setgameover(true);
        setquestions([]);
        setnumberr(0);
        setscore(0);
      }
    } else {
      alert("YOU have choosed a wrong option");
      setgameover(true);
      setquestions([]);
      setnumberr(0);
      setscore(0);
    }
  };
  const nextQuestion = () => {
    if (numberr === 9) {
      alert("All Questions are over");
      setgameover(true);
      setquestions([]);
      setnumberr(0);
      setscore(0);
    } else {
      setnumberr(numberr + 1);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <Typography
          variant="h3"
          style={{ display: "flex", justifyContent: "center", color: "blue" }}
        >
          THIS IS A QUIZ WEBSITE
        </Typography>

        {gameover || score === totalQuestions ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Button
              variant="contained"
              style={{ width: "300px", height: "40px" }}
              onClick={() => {
                startGame();
              }}
            >
              {" "}
              Start{" "}
            </Button>
          </div>
        ) : null}
        {!gameover ? (
          <Typography variant="h4" color="green">
            Score: {score}
          </Typography>
        ) : null}
        {loading ? (
          <Typography variant="h4" color="Red">
            Loading...
          </Typography>
        ) : null}
        {!loading && !gameover ? (
          <Qcard
            numberr={numberr + 1}
            totalQuestions={totalQuestions}
            question={questions[numberr].question}
            answers={questions[numberr].answers}
            callback={checkAnswer}
          ></Qcard>
        ) : null}
        <br></br>
        {!gameover && !loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              style={{ width: "300px", height: "50px" }}
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
