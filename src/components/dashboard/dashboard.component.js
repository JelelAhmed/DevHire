import React from "react";

import ProfileCard from "../profile-card/profile-card.component";
import Footer from "../footer/footer.component";

import './dashboard.styles.scss';
import CurrencyConverter from "../currency-converter/currency-converter.component";

const Dashboard = () => {
	

	return (
		<div className='dashboard'>
			<div className="dashboard-container">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</div>
			<div className="dashboard-footer">
				<Footer />
				<CurrencyConverter />
			</div>
		</div>
	)
};


export default Dashboard;