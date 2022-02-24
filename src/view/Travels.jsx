import React from 'react';
import Place from '../components/Place.jsx';
import data from '../data/travelData.jsx';

function Travels() {
	const places = data.map(place =>{
		return(
			<Place 
			key={place.id}
			title={place.title}
			image={place.image}
			location={place.location}
			googleMapsUrl={place.googleMapsUrl}
			startDate={place.startDate}
			endDate={place.endDate}
			description={place.description}
			image={place.image}
			/>
		)
	})
  return (
    <div>
			<h1> My Travel Journal</h1>
			<div className="places">
				{places}
			</div>
			
		</div>
  );
}

export default Travels;