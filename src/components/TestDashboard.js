import React from 'react';
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
import test_img from '../lesson1.jpg';
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



function Test() {

  const classes = useStyles();
  let cards = [];
  let tests = [{
    name: "Test 1",
    summary: "Alphabet",
    id: 1,
    image: "src/lesson1.jpg"
  },  
  {
    name: "Test 2",
    id: 2,
    summary: "Basic Phrases",
    image: "./src/lesson1.jpg"
  },
  
  {
    name: "Test 3",
    id: 3,
    summary: "greetings",
    image: "./src/lesson1.jpg"
  }]
  let test_cards = [];

  if (tests) {
		let newCards = tests.map((test) => {
			return (
				<Grid item xs={12} sm={6} md={4} key={test.id}>
					<Card className={classes.root} key={test.id}>
						<CardActionArea>
							<Link to={`/test/${test.id}`}>
								<CardMedia
									className={classes.media}
									image= {test_img}
									title={test.name}
									alt="test card"
								/>
							</Link>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{test.name}
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									{test.summary}
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
      <h2>Tests</h2>
    </div>
    			<Grid container spacing={2}>
          {cards}
        </Grid>
      </>
  );
};
export default Test;
