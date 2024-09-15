import "./WeatherForcast.css"

export default function WeatherForcasts(props) {
   

	
	return (
	<div className="weather">
		<h2>Day of the Week</h2>
		<img src={props.imgsrc} alt={props.alttxt} />
		<p>
			<span>conditions: {props.cond} </span>
		</p>
		<p>
			<span>time: {props.time} </span>
		</p>
	</div>
    )
   
}


