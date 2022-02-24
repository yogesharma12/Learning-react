import React from 'react';
import pin from "../images/pin.png"

function Place(props) {
	let endD
	if(props.endDate == ""){
		endD=false
	}else{
		endD=true
	}

  return (
    <div className="place">
			<img src={props.image} className="placeImage"/>
			<div className="travelInfo">
				<div className="location">
					<img src={pin} className="pin"/>
					<h5>{props.location}</h5>
					<a href={props.googleMapsUrl}><p className="grey">View on maps</p></a>
				</div>
				<h1 className="title"> {props.title} </h1>
				
				<h3 className="date">{props.startDate} - {props.endDate}</h3> 
				
				<p className="description">{props.description}</p>
			</div>
			
		</div>
  );
}

export default Place;