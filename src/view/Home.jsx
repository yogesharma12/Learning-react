import React from 'react';
import {useState} from 'react';

function Home() {

	const [count,setCount] = useState(0);
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	const reset = () => {
		setCount(0)
	}

  return (
    <div className="Home">
			<h1> Hello Home </h1>
			<h3> Incrementer </h3>
			{count}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
  );
}

export default Home;