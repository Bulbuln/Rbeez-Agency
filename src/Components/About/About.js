import { useEffect, useState } from 'react'
import './about.css'

const About = () => {

	const [of, setOf] = useState(false)

	const toggle = () => {
		setOf(!of)
	}

	useEffect(() => {
		const timer = setTimeout(toggle, 3000);
		return () => clearTimeout(timer);
	});
	return (
		<div className="about article" id="about-us">

			<h2>About us</h2>

			<div className="about-box">

				<p> <span className="company-name">Rbezz Certified office</span> <br />Rbeez For Certified Translation,
              Copying And Photocopying, Located In Riyadh,
              Saudi Arabia, Is Providing Many Activities
              Students Services, Copying, Photocopying And Designing.
              Excellence And Superiority In Many Fields. Its Remarkable Success Is Reflected In Several Domains.
              Certified Translation Department For All Languages :
              Our Offices Group Translates To And From The Following Languages
              For All Domains: Arabic Language To And From The Following Languages
              In All Of Its Specialties English Language To And From The Following Languages
              In All Of Its Specialties
        </p>

				<img className="about-img" src={of ? '/image/WhatsApp Image 2021-03-16 at 3.55.50 PM (3).jpeg' : '/image/WhatsApp Image 2021-03-16 at 3.55.50 PM (4).jpeg'} alt="Birou" />
			</div>


		</div>
	)
}

export default About
