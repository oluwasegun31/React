import React, { useState } from 'react';
import classes from './quiz.module.css';
import questions from './Question';

export default function Quiz() {
	const [currentQuestion, setCurrentQuession] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleBtnClick = (isCorrect)=> {
        if(isCorrect){
            alert('Correct')
            setScore((val)=> val + 1)
        }
        currentQuestion === questions.length - 1 ? setShowScore(true) : setCurrentQuession((val)=> val + 1);
    }
	return (
        <section className={classes.body}>
            <div className={classes.app}>
                {/* HINT: replace "false" with logic to display the 
        score when the user has answered all the questions */}
                {showScore ? (
                    <div className={classes.scoreSection}>You scored {score} out of {questions.length}</div>
                ) : (
                    <>
                        <div className={classes.questionSection}>
                            <div className={classes.questionCount}>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className={classes.questionText}>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className={classes.answerSection}>
                            {questions[currentQuestion].answerOptions.map(item=> {
                                return <button key={item.answerText} onClick={()=> handleBtnClick((item.isCorrect))}>{item.answerText}</button>
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
	);
}