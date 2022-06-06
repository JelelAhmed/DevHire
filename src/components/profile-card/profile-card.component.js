import React from "react";

import { ReactComponent as FavIcon } from '../../assets/favorite.svg'
import profile1 from '../../assets/profile/profile-6.jpg';
import avatar1 from '../../assets/avatars/avatar-2.jpg';
import './profile-card.styles.scss';

const ProfileCard = ({services, id, name, avatar, photo, rate, currency}) => {
	console.log(services, id, name)
	

	return (
		<div className='profile'>
			<div className="profile-background">
				<div className="profile-backdrop">
					<FavIcon className="profile-icon" />
				</div>
				<img className="profile-image" src={photo} alt='pic' />
			</div>
			<div className="profile-avatar">
				<img src={avatar} alt='avatar' />
			</div>
			<div className="profile-info">
				<div className="profile-detail">
					<span className="profile-name">{name}</span>
					<span className="profile-rate">#{rate}</span>
				</div>
				<div className="profile-cta">Hire</div>
			</div>
		</div>
	)
};


export default ProfileCard;