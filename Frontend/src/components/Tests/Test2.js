
import ProgressBar from "../ProgressBar"
import React, {useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../firebase/Auth';
import { Link } from 'react-router-dom';

function Test2() {

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
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Radio', isCorrect: false },
				{ answerText: 'Valid', isCorrect: false },
				{ answerText: 'Safe', isCorrect: true },
				{ answerText: 'Half', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Jacket', isCorrect: false },
				{ answerText: 'Female', isCorrect: true },
				{ answerText: 'Deal', isCorrect: false },
				{ answerText: 'Abbreviate', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Easy', isCorrect: true },
				{ answerText: 'Car', isCorrect: false },
				{ answerText: 'Valid', isCorrect: false },
				{ answerText: 'Wait', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Machine', isCorrect: false },
				{ answerText: 'Walk', isCorrect: false },
				{ answerText: 'Zero', isCorrect: false },
				{ answerText: 'Knife', isCorrect: true },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Name', isCorrect: false },
				{ answerText: 'Knife', isCorrect: false },
				{ answerText: 'Zero', isCorrect: false },
				{ answerText: 'Year', isCorrect: true },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Oath', isCorrect: false },
				{ answerText: 'Safe', isCorrect: false },
				{ answerText: 'Back', isCorrect: true },
				{ answerText: 'Paint', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Quantity', isCorrect: false },
				{ answerText: 'Wait', isCorrect: true },
				{ answerText: 'Abandon', isCorrect: false },
				{ answerText: 'Abbreviate', isCorrect: false },
			],
		},
		{
			questionText: 'What word does this sign represent?',
			answerOptions: [
				{ answerText: 'Name', isCorrect: true },
				{ answerText: 'Daily', isCorrect: false },
				{ answerText: 'Test', isCorrect: false },
				{ answerText: 'Wall', isCorrect: false },
			],
		},
	];

	var videos = new Array();
	videos[0] = "safe.mp4";
	videos[1] = "female.mp4";
	videos[2] = "easy.mp4";
	videos[3] = "knife.mp4";
	videos[4] = "year.mp4";
	videos[5] = "back.mp4";
	videos[6] = "wait.mp4";
	videos[7] = "name.mp4";	
	

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
		axios.post(`http://localhost:9000/${currentUser.email}/testTwo/${score/8*100}`);
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
					You answered: {answers[0]} <font color = "#2f922f">Correct answer: Safe</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 2. {questions[1].questionText} 
					<div className='feedback-section'>
					You answered: {answers[1]} <font color = "#2f922f">Correct answer: Female</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 3. {questions[2].questionText}
					<div className='feedback-section'>
					You answered: {answers[2]} <font color = "#2f922f">Correct answer: Easy</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[3].questionText} 
					<div className='feedback-section'>
					You answered: {answers[3]} <font color = "#2f922f">Correct answer: Knife</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 5. {questions[4].questionText} 
					<div className='feedback-section'>
					You answered: {answers[4]} <font color = "#2f922f">Correct answer: Year</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 6. {questions[5].questionText} 
					<div className='feedback-section'>
					You answered: {answers[5]} <font color = "#2f922f">Correct answer: Back</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 7. {questions[6].questionText} 
					<div className='feedback-section'>
					You answered: {answers[6]} <font color = "#2f922f">Correct answer: Wait</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 8. {questions[7].questionText} 
					<div className='feedback-section'>
					You answered: {answers[7]} <font color = "#2f922f">Correct answer: Name</font>
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
							
							<button className="buttonTest" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)} > {answerOption.answerText} </button>
							
						))}
					</div>
				</>
			)}
		</div>
		<div style = {fullElemnt}>
		<Link to="/lessons/2" style = {linkStyle} >Link To Words Lesson</Link>
		</div>
		</div>
	);
}
export default Test2;