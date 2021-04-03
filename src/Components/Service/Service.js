import React, { useEffect, useState } from 'react'
import './service.css'


const Service = () => {

	const [service, setservice] = useState([])

	useEffect(() => {
		fetch("js/data.json")
			.then(res => res.json())
			.then((data) => {
				console.log(data.service)

				setservice(data.service)

			})
	}, [])

	return (

		<div id="service" className="service  article">
			<h2>Our Service</h2>
			<div className="box-cont">
				{service.map((serv) => {
					return (
						<div key={serv.id} className="box">
							<img className="service-img" src={serv.img} alt={serv.alt} />
							<p className="title">{serv.title}</p>
						</div>
					)
				})}

			</div>
		</div>


	)
}

export default Service
