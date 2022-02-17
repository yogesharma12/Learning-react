import React from 'react';
import './App.css';
import Home from './view/Home.jsx';
import Nav from './view/Nav.jsx';
import About from './view/About.jsx';
import Projects from './view/Projects.jsx';
import Blogs from './view/Blogs.jsx';
import Shop from './view/Shop.jsx';
import Contact from './view/Contact.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './view/Footer.jsx'

function App() {
  return (
		<Router>
    	<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/projects" element={<Projects/>}/>
					<Route path="/blogs" element={<Blogs/>}/>
					<Route path="/shop" element={<Shop/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Routes>

				<Footer />
			</div>

		</Router>
  );
}

export default App;