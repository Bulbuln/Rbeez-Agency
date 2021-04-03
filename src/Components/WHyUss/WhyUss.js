import React from 'react';
import { IoIosSpeedometer } from 'react-icons/io/index';
import { FaTeamspeak } from 'react-icons/fa/index';
import { MdHighQuality } from 'react-icons/md/index';
import { IoMdPricetags } from 'react-icons/io/index';
import { GiBrainFreeze } from 'react-icons/gi/index';
import { RiFocus3Line } from 'react-icons/ri/index';

import './whyus.css'


const WhyUss = () => {
	return (


		<div id="why-us" className="why-us  article">
			<h2>Why us</h2>
			<div className="box-cont">

				<div className="value-box">
					<IoIosSpeedometer className="icon" />
					<p className="title"> Maybe we are not the only ones but we are the <span className="value-span">FAST</span> </p>
				</div>

				<div className="value-box">
					<FaTeamspeak className="icon" />
					<p className="title"> Responsive Project Team</p>
				</div>

				<div className="value-box">
					<MdHighQuality className="icon" />
					<p className="title"> 120+ Languages</p>
				</div>


				<div className="value-box">
					<IoMdPricetags className="icon" />
					<p className="title"> Lowest Prices</p>
				</div>


				<div className="value-box">
					<GiBrainFreeze className="icon" />
					<p className="title"> The experience of years worked </p>
				</div>


				<div className="value-box">
					<RiFocus3Line className="icon" />
					<p className="title"> Top Focus</p>
				</div>

			</div>

		</div>


	)
}

export default WhyUss
