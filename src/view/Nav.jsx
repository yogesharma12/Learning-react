import React from 'react';
import {Link} from 'react-router-dom';
import logo from './b.jpg';

function Nav() {
  return (
    <div className = 'Nav'>
			<img className="logo" src={logo}/>
			<ul className='list'>
				<Link to="/">
					<li className="list-item"> Home</li>
				</Link>
				<Link to="/about">
					<li className="list-item"> About</li>
				</Link>
				<Link to="/projects">
					<li className="list-item"> Projects</li>
				</Link>
				<Link to="/blogs">
					<li className="list-item"> Blogs</li>
				</Link>
				<Link to="/shop">
					<li className="list-item"> Shop</li>
				</Link>
				<Link to="/contact">
					<li className="list-item"> Contact</li>
				</Link>
				
			</ul>
		</div>
  );
}

export default Nav;