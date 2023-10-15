import edu from '../assets/images/education.jpg'
export default function About() {
	return (
		<>
			<div style={{marginTop: '20vh'}} id='about-section'>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5">
							<img src={edu} alt="" style={{width: '40em'}} />
						</div>
						<div className="col-md-7">
							<h1>About Me</h1>
							<p style={{fontSize: '1.5em', textAlign: 'justify'}}>
								I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work.
								<br />
								<br />
								<b style={{fontSize: '1em'}}>My Qualifications Are:</b><br />
								<table className='table' style={{fontSize: '0.7em'}}>
									<thead className="table-dark">
										<tr>
											<th></th>
											<th>Institution</th>
											<th>Passing Year</th>
											<th>Board</th>
											<th>Result</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td></td>
											<td>VIT, Amaravati</td>
											<td>-</td>
											<td>VIT</td>
											<td>-</td>
										</tr>
										<tr>
											<td></td>
											<td>Narayana Junior College, Hyderabad</td>
											<td>2021</td>
											<td>Telangana State Board</td>
											<td>A+</td>
										</tr>
										<tr>
											<td></td>
											<td>Sanghamitra High School, Zaheerabad</td>
											<td>2019</td>
											<td>Telangana State Board</td>
											<td>A</td>
										</tr>
									</tbody>
								</table>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}