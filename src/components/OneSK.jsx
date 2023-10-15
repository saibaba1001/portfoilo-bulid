export default function OneSK(props) {
	return (
		<>
			<div style={{padding: '5px 0px 15px 5px'}}>
				<label style={{fontWeight: 'bold'}}>{props.label}</label>
				<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
					<div className="progress-bar" style={{width: props.percentage}}>{props.percentage}</div>
				</div>
			</div>
		</>
	)
}