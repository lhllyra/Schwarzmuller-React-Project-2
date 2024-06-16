import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    
    const skippedPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100);

    const wrongPercentage = 100 - skippedPercentage - correctPercentage;


  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
            let cssClass = 'user-answer';

            if(answer === null){
                cssClass += ' skipped';
            }
            else if (answer === QUESTIONS[index].answers[0]){
                cssClass += ' correct';
            }
            else{
                cssClass += ' wrong';
            }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
