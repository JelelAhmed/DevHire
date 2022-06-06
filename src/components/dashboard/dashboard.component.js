import React, { useEffect } from "react";

import { getDevelopers } from "../../store/developer/developer.actions";
import { selectDevs } from "../../store/developer/developer.selectors";

import ProfileCard from "../profile-card/profile-card.component";
import Footer from "../footer/footer.component";

import './dashboard.styles.scss';
import CurrencyConverter from "../currency-converter/currency-converter.component";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
	const dispatch = useDispatch();
	const devs = useSelector(selectDevs);

	useEffect(() => {
		dispatch(getDevelopers());
	  console.log(devs);
	}, [])

	console.log(devs)


	return (
		<div className='dashboard'>
			<div className="dashboard-container">
			{devs ? (
				devs.map((profile) => {
							return (
								<ProfileCard
									key={profile._id}
									services={profile._index}
									id={profile._id}
									name={profile._source.display_name}
									avatar={profile._source.avatar}
									photo={profile._source.service_photo}
									rate={profile._source.starting_from}
									currency={profile._source.currency_name}

								/>
							);
						})
				)
				: <div>No Developers to Display</div> 
			}
			</div>
			<div className="dashboard-footer">
				<Footer />
				<CurrencyConverter />
			</div>
		</div>
	)
};


export default Dashboard;