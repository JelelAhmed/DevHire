import React from "react";

import { ReactComponent as FavIcon } from '../../assets/favorite.svg'
import profile1 from '../../assets/profile/profile-6.jpg';
import avatar1 from '../../assets/avatars/avatar-2.jpg';
import './profile-card.styles.scss';

const ProfileCard = () => {
	

	return (
		<div className='profile'>
			<div className="profile-background">
				<div className="profile-backdrop">
					<FavIcon className="profile-icon" />
				</div>
				<img className="profile-image" src={profile1} alt='pic' />
			</div>
			<div className="profile-avatar">
				<img src={avatar1} alt='avatar' />
			</div>
			<div className="profile-info">
				<div className="profile-detail">
					<span className="profile-name">Rich jack</span>
					<span className="profile-rate">#30,000</span>
				</div>
				<div className="profile-cta">Hire</div>
			</div>
		</div>
	)
};


export default ProfileCard;