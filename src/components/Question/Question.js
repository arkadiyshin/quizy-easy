import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import QuizContext from "../../context/QuizContext";

import Timer from "../Timer/Timer";
import OptionButton from "../OptionButton/OptionButton";

import movieQuestion from "../../api/movieApi";
import dogQuestion from "../../api/dogApi";
import flagQuestion from "../../api/flagApi";
import mealQuestion from "../../api/mealApi";
import "./question.css";
import CurrentScore from "../CurrentScore/CurrentScore";

function Question(props) {
  const { category } = useParams();
  const [question, setQuestion] = useState(null);

  const { questionNumber, numberOfCorrectAnswers, madeChoice, setMadeChoice } =
    useContext(QuizContext);

  console.log(category);

  useEffect(() => {
    //console.log(`quiz use effect ${questionNumber}`);

    if (category === "movies") {
      movieQuestion().then((result) => {
        setQuestion(result);
      });
    } else if (category === "dogs") {
      dogQuestion().then((result) => {
        setQuestion(result);
      });
    } else if (category === "flags") {
      flagQuestion().then((result) => {
        setQuestion(result);
      });
    } else if (category === "meals") {
      mealQuestion().then((result) => {
        setQuestion(result);
        console.log(result);
      });
    }
    setMadeChoice(false);
  }, [category, questionNumber]);

  if (!question) return null;

  return (
    <div className="container">
      <div>
        <div className="question_header">
          <h1>{questionNumber}</h1> {/* component QuestionNumber */}
          <Timer max={10} />
          <CurrentScore score={numberOfCorrectAnswers}/> {/* component CurrentScore */}
        </div>

        <img src={question.question.image} alt="no-data" />
      </div>

      <div>
        {question.variants.map((e) => {
          return (
            <OptionButton
              key={e.name}
              name={e.name}
              isCorrect={e.isCorrect}
              disabled={madeChoice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Question;
