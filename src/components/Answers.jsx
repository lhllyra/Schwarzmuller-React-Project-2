import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let buttonClass = "";

          if (answerState === "answered" && isSelected) {
            buttonClass = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            buttonClass = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                className={buttonClass}
                onClick={() => onSelect(answer)}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
