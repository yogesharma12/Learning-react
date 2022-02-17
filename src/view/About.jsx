import React,{useState} from 'react';
import Movie from './Movie.jsx';

function About() {
	const [movies, setMovies] = useState([
		{
			name : "Harry Potter",
			price : 10,
			id : 11
		},
		{
			name : "Breaking Bad",
			price : 10,
			id : 22
		},
		{
			name : "Money Heist",
			price : 10,
			id : 33
		}
	]);


  return (
    <div>
			<h1> Hello About </h1>
			<h2> Movies List </h2>
			{
				movies.map(movie => 
					(<Movie key = {movie.id} name = {movie.name} price = {movie.price} />)
				)
			}
			
		</div>
  );
}

export default About;