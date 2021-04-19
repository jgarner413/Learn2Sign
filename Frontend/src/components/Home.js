import React,{ useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import '../App.css';
import lesson_img from '../lesson1.jpg';
import axios from 'axios';
import { AuthContext } from '../firebase/Auth';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		minWidth: 200,
		maxWidth: 500,
		minHeight: 300,
		maxHeight: 350
	},
	media: {
		height: 200
	}
});



function Home() {
	const { currentUser } = useContext(AuthContext);
	const [status, setStatus] = useState([false, false, false]);
	const [loading, setLoading] = useState(true);

	async function getStatus(){
		let rcvOne = await axios.get(`http://localhost:9000/${currentUser.email}/lessonOne`);
		let lessonOne = rcvOne.data.status;
		let rcvTwo = await axios.get(`http://localhost:9000/${currentUser.email}/lessonTwo`);
		let lessonTwo = rcvTwo.data.status;
		let rcvThree = await axios.get(`http://localhost:9000/${currentUser.email}/lessonThree`);
		let lessonThree = rcvThree.data.status;
		setStatus([lessonOne, lessonTwo, lessonThree]);
		setLoading(false);
	}

	if(loading){	
		getStatus();
	}

  const classes = useStyles();
  let cards = [];
  let lessons = [{
    name: "Alphabets",
    summary: "A-Z",
    id: 1,
    image: "src/lesson1.jpg",
	status: status[0]
  },  
  {
    name: "Words",
    id: 2,
    summary: "Basic Words",
    image: "./src/lesson1.jpg",
	status: status[1]
  },
  
  {
    name: "Greetings",
    id: 3,
    summary: "Simple Greetings",
    image: "./src/lesson1.jpg",
	status: status[2]

  }]
  let lesson_cards = [];

  if (lessons) {
	  console.log(lessons);
		let newCards = lessons.map((lesson) => {
			return (
				<Grid item xs={12} sm={6} md={4} key={lesson.id}>
					<Card className={classes.root} key={lesson.id}>
						<CardActionArea>
							<Link to={`/lessons/${lesson.id}`}>
								<CardMedia
									className={classes.media}
									image= {lesson_img}
									title={lesson.name}
									alt="lesson card"
								/>
							</Link>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{lesson.name}
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									{lesson.summary}
									<br/>
									{`Complete: ${lesson.status}`}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			);
		});
    cards = newCards;
  }
  return (
    <>
    <div>
      <h2>Tutorials</h2>
    </div>
    			<Grid container spacing={2}>
          {cards}
        </Grid>
      </>
  );
};
export default Home;
