import React from 'react';

import '../App.css';

function Landing() {
  return (
    <div>
      			<img src="/imgs/asl_landing.png" alt="Learn2Sign logo" />
			<h2>Welcome to Learn2Sign!</h2>
			<p className="intro">
				Learn2Sign! is our CS-545 final project to help
				users find learn sign language. Users can learn american sign language through our learn tab. They can then test themselves
        in our Tests tab. Our application is designed to be educational and easy to learn!{' '}
			</p>
    </div>
  );
}

export default Landing;
