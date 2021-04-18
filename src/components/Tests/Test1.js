import React, { useState } from 'react';
import ProgressBar from "../ProgressBar"

function Test1() {
	const questions = [
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'G', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'D', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'B', isCorrect: true },
				{ answerText: 'E', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'F', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'E', isCorrect: false },
				{ answerText: 'G', isCorrect: false },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'G', isCorrect: false },
				{ answerText: 'E', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'A', isCorrect: true },
			],
		},
	];

	var images = new Array();
	images[0] = "/imgs/D.png";
	images[1] = "/imgs/B.png";
	images[2] = "/imgs/F.png";
	images[3] = "/imgs/A.png";

	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
			<ProgressBar bgcolor="#00695c" completed={((currentQuestion + 1)/questions.length)*100} />
		<div className='testBody'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<img width="90%" height="70%" object-fit="contain" src = {images[currentQuestion]} alt="Test img" />
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonTest" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
export default Test1;