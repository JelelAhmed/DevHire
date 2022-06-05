import React from 'react';

import Dashboard from '../../components/dashboard/dashboard.component';
import './home.styles.scss';


const  Home = () => {
	return (
		<div className="home">
			<div className='home-container'>
				<h1 className='home-heading'>Hire Top Developers</h1>
				<div className='home-dashboard'>
					<Dashboard />
				</div>
			</div>
		</div>
	);
}

export default Home;
