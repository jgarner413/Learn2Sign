import ProgressBar from "../ProgressBar"
import React, {useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../firebase/Auth';
import { Link } from 'react-router-dom';

function Test3() {

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
			questionText: 'What greeting does this sign represent?',
			answerOptions: [
				{ answerText: 'How are you', isCorrect: false },
				{ answerText: 'Thank you', isCorrect: false },
				{ answerText: 'You are welcome', isCorrect: false },
				{ answerText: 'Nice to meet you', isCorrect: true },
			],
		},
		{
			questionText: 'What greeting does this sign represent?',
			answerOptions: [
				{ answerText: 'Good morning', isCorrect: false },
				{ answerText: 'Thank you', isCorrect: true },
				{ answerText: 'Have a good day', isCorrect: false },
				{ answerText: 'You are welcome', isCorrect: false },
			],
		},
		{
			questionText: 'What greeting does this sign represent?',
			answerOptions: [
				{ answerText: 'How are you', isCorrect: true },
				{ answerText: 'Good night', isCorrect: false },
				{ answerText: 'Thank you', isCorrect: false },
				{ answerText: 'You are welcome', isCorrect: false },
			],
		},
        {
			questionText: 'What greeting does this sign represent?',
			answerOptions: [
				{ answerText: 'Good afternoon', isCorrect: false },
				{ answerText: 'Good morning', isCorrect: true },
				{ answerText: 'Good Evening', isCorrect: false },
				{ answerText: 'Good Night', isCorrect: false },
			],
		},
	];

	var videos = new Array();
	videos[0] = "nice_to_meet_you.mp4";
	videos[1] = "thank_you.mp4";
	videos[2] = "how_are_you.mp4";
	videos[3] = "good_morning.mp4";
	

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
		axios.post(`http://localhost:9000/${currentUser.email}/testThree/${score/4*100}`);
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
					You answered: {answers[0]} <font color = "#2f922f">Correct answer: Nice to meet you</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 2. {questions[1].questionText} 
					<div className='feedback-section'>
					You answered: {answers[1]} <font color = "#2f922f">Correct answer: Thank you</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 3. {questions[2].questionText}
					<div className='feedback-section'>
					You answered: {answers[2]} <font color = "#2f922f">Correct answer: How are you</font>
					</div>
					</div>
					<div className='feedback-section'>
					Question 4. {questions[3].questionText} 
					<div className='feedback-section'>
					You answered: {answers[3]} <font color = "#2f922f">Correct answer: Good morning</font>
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
		<Link to="/lessons/3" style = {linkStyle} >Link To Greetings Lesson</Link>
		</div>
		</div>
	);
}
export default Test3;