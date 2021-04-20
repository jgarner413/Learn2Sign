import ProgressBar from "../ProgressBar"
import React, {useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../firebase/Auth';

function Test1() {

	const { currentUser } = useContext(AuthContext);


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
	//useState used to collect user responses to each question
	const [answers, setAnswers] = useState([]);

	const handleAnswerOptionClick = (isCorrect, answerText) => {
		if (isCorrect) {
			setScore(score + 1);
			setAnswers(answers => answers.concat(answerText));
		}
		if (!isCorrect){
			setAnswers(answers => answers.concat(answerText));
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		
	};

	if(showScore){
		axios.post(`http://localhost:9000/${currentUser.email}/testOne/${score/4*100}`);
	}

	return (
			<div>
			<ProgressBar bgcolor="#252d4a" completed={((currentQuestion +1 )/questions.length)*100} />
			<div className='testBody'>
			{showScore ? (
				<div className='feedback-section'>	
					<div className='header-section'>
					<font color = "#2f922f">You scored {score} out of {questions.length} correctly!</font>
					</div>
					<div className='feedback-section'>
					Question 1. {questions[0].questionText} 
					<div className='feedback-section'>
					You answered: {answers[0]} <font color = "#2f922f">Correct answer: D</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 2. {questions[1].questionText} 
					<div className='feedback-section'>
					You answered: {answers[1]} <font color = "#2f922f">Correct answer: B</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 3. {questions[2].questionText}
					<div className='feedback-section'>
					You answered: {answers[2]} <font color = "#2f922f">Correct answer: F</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[3].questionText} 
					<div className='feedback-section'>
					You answered: {answers[3]} <font color = "#2f922f">Correct answer: A</font>
					</div>
					</div>
					

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
							<button className="buttonTest" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
export default Test1;