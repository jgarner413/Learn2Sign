import React, {useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../firebase/Auth';


function Test2() {
	const { currentUser } = useContext(AuthContext);

	const questions = [
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Goodnight!', isCorrect: false },
				{ answerText: 'Bye!', isCorrect: false },
				{ answerText: 'Hello!', isCorrect: true },
				{ answerText: 'Goodmorning!', isCorrect: false },
			],
		},
		{
			questionText: 'What common phrase does this sign represent?',
			answerOptions: [
				{ answerText: 'Have a good day!', isCorrect: false },
				{ answerText: 'How are you?', isCorrect: true },
				{ answerText: 'Whats your name?', isCorrect: false },
				{ answerText: 'Where are you from?', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Goodbye!', isCorrect: true },
				{ answerText: 'Hello!', isCorrect: false },
				{ answerText: 'Cool!', isCorrect: false },
				{ answerText: 'Nice!', isCorrect: false },
			],
		},
		{
			questionText: 'What common phrase does this sign represent?',
			answerOptions: [
				{ answerText: 'See you later!', isCorrect: false },
				{ answerText: 'Have fun!', isCorrect: false },
				{ answerText: 'Game over!', isCorrect: false },
				{ answerText: 'Happy Birthday!', isCorrect: true },
			],
		},
	];

	//hardcoded paths for images associated with relevant test question
	var images = new Array();
	images[0] = "/imgs/hello.png";
	images[1] = "/imgs/howareyou.png";
	images[2] = "/imgs/goodbye.png";
	images[3] = "/imgs/hbd.png";
	

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
		axios.post(`http://localhost:9000/${currentUser.email}/testTwo/${score/4*100}`);
	}

	return (
		<div className='testBody'>
			{showScore ? (
				<div className='feedback-section'>	
					<div className='header-section'>
					<font color = "#2f922f">You scored {score} out of {questions.length} correctly!</font>
					</div>
					<div className='feedback-section'>
					Question 1. {questions[0].questionText} 
					<div className='feedback-section'>
					You answered: {answers[0]} <font color = "#2f922f">Correct answer: Hello!</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 2. {questions[1].questionText} 
					<div className='feedback-section'>
					You answered: {answers[1]} <font color = "#2f922f">Correct answer: How are you?</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 3. {questions[2].questionText}
					<div className='feedback-section'>
					You answered: {answers[2]} <font color = "#2f922f">Correct answer: Goodbye!</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[3].questionText} 
					<div className='feedback-section'>
					You answered: {answers[3]} <font color = "#2f922f">Correct answer: Happy Birthday!</font>
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
						<img width="90%" height="70%" object-fit="contain" src = {images[currentQuestion]} alt="Test2 img" />
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							
							<button className="buttonTest" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)} > {answerOption.answerText} </button>
							
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default Test2;