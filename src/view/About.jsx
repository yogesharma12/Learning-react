import React from 'react';
import profile from '../images/profile.jpg';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function About() {
  return (
    <div className="Business-card">
			<img src={profile} className="profile"/>
			<div className="card-content">
					<h1>Yogesh Sharma</h1>
					<h3>Front-end Developer</h3>
					<h4>yogeshsharma.website</h4>
					<div className="buttons">
						<button className="email">
							<img src={email} />
							Email
					 	</button>
						<button className="linkedin">
							<img src={linkedin} />
							LinkedIn
					 	</button>
					</div>
					<h2>About</h2>
					<p>I am a Front-end developer. I like to learn new technologies and apply them in real life. Right now I am learning React JS. I am a SAP Fiori developer at Capgemini</p>
					<h2>Interests</h2>
					<p>Basketball. Music - Learning to play Flute. Anime . Hindi Writing</p>
					<div className="social-media">
						<img src={twitter} />
						<img src={facebook} />
						<img src={instagram} />
						<img src={github} />
					</div>
			</div>
		</div>
  );
}

export default About;