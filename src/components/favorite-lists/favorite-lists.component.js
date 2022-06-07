import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectFavorite } from '../../store/developer/developer.selectors';

import ProfileCard from '../../components/profile-card/profile-card.component';
import Dashboard from '../../components/dashboard/dashboard.component';
import './favorite-lists.styles.scss';


const  FavoriteList = () => {
	const favorites = useSelector(selectFavorite);

	useEffect(() => {

	},[favorites])

	return (
		<Dashboard>
			{favorites ? (
				favorites.map((profile) => {
							return (
								<ProfileCard
									key={profile._id}
									profile={profile}
									services={profile._index}
									id={profile._id}
									name={profile._source.display_name}
									avatar={profile._source.avatar}
									photo={profile._source.service_photo}
									price={profile._source.starting_from}
									currency={profile._source.currency_name}
								/>
							);
						})
				)
				: <div className="developers">No Favorites to Display</div> 
			}
		</Dashboard>
	);
}

export default FavoriteList;



