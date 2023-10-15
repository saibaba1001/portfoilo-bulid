import skills from '../assets/images/skills.jpg'
import OneSK from './OneSK'

export default function Skills() {
	return (
		<>
			<div style={{marginTop: '25vh'}} id='skills-section'>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-7">
							<h1>Skills</h1>
							<OneSK label="HTML" percentage="90%" />
							<OneSK label="CSS" percentage="70%" />
							<OneSK label="JavaScript" percentage="95%" />
							<OneSK label="MySQL" percentage="50%" />
							<OneSK label="XML" percentage="96%" />
							<OneSK label="Mongo DB" percentage="50%" />
							<OneSK label="Python" percentage="90%" />
							<OneSK label="Java" percentage="95%" />
						</div>
						<div className="col-md-5">
							<img src={skills} alt="" style={{marginTop: '5em'}} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}