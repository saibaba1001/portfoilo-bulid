import sonu from "../assets/images/sonu.jpg"
import bg from '../assets/images/wave.svg'

import { motion } from "framer-motion"

export default function Introduction() {
	return (
		<>
			<div className="container-fluid" id="intro-section">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-6">
						<div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
							<motion.h1 style={{ fontSize: '7em' }} animate={{
								scale: [1, 2, 2, 1, 1],
								rotate: [0, 0, 180, 180, 0],
								borderRadius: ["0%", "0%", "50%", "50%", "0%"]
							}}>Sai Baba</motion.h1>
							<h4 style={{ textAlign: 'center', fontWeight: 'normal', fontSize: '2em', lineHeight: '1.9em' }}>
								Hi, I am Sai Baba<br />
								Currently working as intern at Amazon Inc. Here I am completely into <b>MERN</b> Stack Development.
								After this trianing, I will be completely learning about Mongo DB, Express JS, React JS and Node Js
							</h4>
						</div>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-4">
						<motion.img
							animate={{
								scale: [1, 2, 2, 1, 1],
								rotate: [0, 0, 180, 180, 0],
								borderRadius: ["0%", "0%", "50%", "50%", "0%"]
							}}
							src={sonu} alt="" style={{ height: "500px", borderRadius: '2em', marginTop: '3vh' }}
						/>
					</div>
				</div>
			</div>
		</>
	)
}