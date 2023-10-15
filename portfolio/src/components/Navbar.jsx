export default function Navbar() {
	function route(r) {
		const releventDiv = document.getElementById(r);
		releventDiv.scrollIntoView({behavior: "smooth"});
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontSize: '20px'}}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#" style={{fontSize: '25px'}}>My Portfolio</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#" onClick={() => {route('intro-section')}}>Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about" onClick={() => {route('about-section')}}>About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skills" onClick={() => {route('skills-section')}}>Skills</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact" onClick={() => {route('contact-section')}}>Contact Me</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}