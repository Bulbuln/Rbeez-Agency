import React from 'react'
import { AiFillCopyrightCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import './style.css'

const Footer = () => {
	return (
		<div className="footer ">
			<div className="footer-top">

				<div className="social">
					<p className="phone">Call us at: <a href="tel"> <BsPhone /> +966-599-9050-12</a></p>
					<p className="mail">Email us at:<a href="mailto"> <AiOutlineMail />  someone@yoursite.com</a> </p>

					<div className="social-net">
						<p>folow us </p>
						<a href="/#"><AiFillFacebook /></a>
						<a href="/#"><AiFillInstagram /></a>
						<a href="/#"><AiFillTwitterCircle /></a>
					</div>
				</div>
				<div className="adress">
					<h4>Our Adress:</h4>
					<p> AL khubar Khaled Ibn Al Walid <br /> Street floor 4</p>
					<div className="google-map" ><iframe title="adress" width="150" height="150" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>

				</div>


			</div>

			<div className="footer-bottom">
				<h5><AiFillCopyrightCircle /> Copyright 2021 Rbeez</h5>
			</div>



		</div>
	)
}

export default Footer
