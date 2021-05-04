import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import '../App.css';
import firebase from 'firebase';
import StarIcon from '@material-ui/icons/Star';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookIcon from '@material-ui/icons/Book';
import TestIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';


import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

const Navigation = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	console.log(firebase.auth().currentUser);
	return (
		<div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
	);
};

const NavigationAuth = () => {
	/*
	console.log(firebase.auth().currentUser);
	const userID = firebase.auth().currentUser.uid;
*/
  let isloading = false; //temp until database is online
  let data = true; //temp until database is online
	if (isloading) {
		return <div>Loading</div>;
	} else if (data === undefined) {
		return <div>Loading</div>;
	} else {
		return (
			<div>
				<nav className="navigation">
					
					<AppBar
						position="relative"
						style={{ background: '#2E3B55' }}
					>
						<Toolbar>
							<div className="links title">
								<StarIcon> </StarIcon>
								<NavLink exact to="/" activeClassName="active">
									Learn2Sign
								</NavLink>
							</div>
							<div className="links title">
							<BookIcon> </BookIcon>
								<NavLink
									exact
									to="/home"
									activeClassName="active"
								>
									Lessons
								</NavLink>
							</div>
							
							
							<div className="links title">
								<TestIcon> </TestIcon>
								<NavLink
									exact
									to="/tests"
									activeClassName="active"
								>
									Tests
								</NavLink>
								
							</div>
							<div className="links title">
								<AccountCircleIcon> </AccountCircleIcon>
								<NavLink
									exact
									to="/account"
									activeClassName="active"
								>
								Account
								</NavLink>
							</div>
						</Toolbar>
					</AppBar>
				</nav>
				
			</div>
		);
	}
};

const NavigationNonAuth = () => {
	return (
		<div>
			<nav className="navigation">
				
				<AppBar position="relative" style={{ background: '#2E3B55', paddingLeft:"200px" }}>
					<Toolbar style={{ color: 'black' }}>
						<div className="links title">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								id="landing"
							>
								Learn2Sign
							</NavLink>
						</div>

						<div className="links title">
							<NavLink
								exact
								to="/signup"
								activeClassName="active"
							>
								Sign-up
							</NavLink>
						</div>
						<div className="links title">
							<NavLink
								exact
								to="/signin"
								activeClassName="active"
							>
								Sign-In
							</NavLink>
						</div>
					</Toolbar>
				</AppBar>
			</nav>
		</div>
	);
};

export default Navigation;
