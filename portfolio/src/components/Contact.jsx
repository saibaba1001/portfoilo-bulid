import gmail from '../assets/images/social/gmail.png'
import insta from '../assets/images/social/insta.png'
import fb from '../assets/images/social/facebook.png'
import snap from '../assets/images/social/snap.png'

export default function Contact() {
	return (
		<>
			<div style={{marginTop: '25vh'}} id='contact-section'>
				<div className="container-fluid">
					<h1 style={{textAlign:'center'}}>Contact Me</h1>
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<div style={{display: 'flex', justifyContent:'space-between'}}>
								<a href="mailto: saibabass1003@gmail.com">
									<img src={gmail} alt="" style={{height: '4em'}} />
								</a>
								<a href= "https://instagram.com/sonuuuuuuu_10?igshid=NTc4MTIwNjQ2YQ==">
								<img src={insta} alt="" style={{height: '4em'}} />
								</a>
								<a href= "https://www.facebook.com/saibaba.sonu.5?mibextid=ZbWKwL">

								<img src={fb} alt="" style={{height: '4em'}} />
								</a>
								<a href= "https://www.snapchat.com/add/sonu.1024?share_id=UZCvcMRqhOQ&locale=en-GB">
								<img src={snap} alt="" style={{height: '4em'}} />
                                </a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<br /><br />
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.590154262744!2d80.49809267561625!3d16.49627768424685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1697352775435!5m2!1sen!2sin" style={{border:0, width: '100%', height: '400px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}