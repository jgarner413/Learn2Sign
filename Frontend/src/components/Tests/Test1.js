import ProgressBar from "../ProgressBar"
import React, {useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../firebase/Auth';
import { Link } from 'react-router-dom';

function Test1() {

	const linkStyle = {
		margin: "1rem",
		color: 'white',
		backgroundColor: "#252d4a",
		display: 'flex',
        height: 30,
		width: '25%',
		justifyContent: 'center',
		alignItems:'center',
	  };

	  const fullElemnt = {
        display: 'flex',
        justifyContent: 'center',
    }

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
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'R', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'J', isCorrect: false },
				{ answerText: 'H', isCorrect: true },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'E', isCorrect: false },
				{ answerText: 'L', isCorrect: true },
				{ answerText: 'F', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'P', isCorrect: true },
				{ answerText: 'U', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
				{ answerText: 'V', isCorrect: false },
			],
		},
		{
			questionText: 'What letter does this sign represent?',
			answerOptions: [
				{ answerText: 'I', isCorrect: false },
				{ answerText: 'J', isCorrect: false },
				{ answerText: 'S', isCorrect: false },
				{ answerText: 'T', isCorrect: true },
			],
		},
	];

	var videos = new Array();
	videos[0] = "j1.mp4";
	videos[1] = "b1.mp4";
	videos[2] = "f1.mp4";
	videos[3] = "a1.mp4";
	videos[4] = "h1.mp4";
	videos[5] = "l1.mp4";
	videos[6] = "p1.mp4";
	videos[7] = "t1.mp4";	

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
		axios.post(`http://localhost:9000/${currentUser.email}/testOne/${score/8*100}`);
	}

	return (
			<div>
				<h2>Percent (%) Completed:</h2>
				<ProgressBar bgcolor="#087548" completed={((currentQuestion +1 )/questions.length)*100} />
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
					<div className='feedback-section'>
					Question 4. {questions[4].questionText} 
					<div className='feedback-section'>
					You answered: {answers[4]} <font color = "#2f922f">Correct answer: H</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[5].questionText} 
					<div className='feedback-section'>
					You answered: {answers[5]} <font color = "#2f922f">Correct answer: L</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[6].questionText} 
					<div className='feedback-section'>
					You answered: {answers[6]} <font color = "#2f922f">Correct answer: P</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[7].questionText} 
					<div className='feedback-section'>
					You answered: {answers[7]} <font color = "#2f922f">Correct answer: T</font>
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
						<video key={`/lesson_videos/${videos[currentQuestion]}`} width="400" height="250" controls autoPlay loop muted >
						<source src={`/lesson_videos/${videos[currentQuestion]}`} type="video/mp4"/>
                  		</video>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonTest" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		<div style = {fullElemnt}>
		<Link to="/lessons/1" style = {linkStyle} >Link To Alphabet Lesson</Link>
		</div>
		</div>
	);
}
export default Test1;