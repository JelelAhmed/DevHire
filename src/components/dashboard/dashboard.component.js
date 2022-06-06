import React, { useEffect } from "react";

import { getDevelopers } from "../../store/developer/developer.actions";
import { selectDevs } from "../../store/developer/developer.selectors";

import ProfileCard from "../profile-card/profile-card.component";
import Footer from "../footer/footer.component";

import CurrencySelect from "../currency-select/currency-select.component";
import { useDispatch, useSelector } from "react-redux";
import { selectConversionId, selectConversionRate, selectCurrencies } from "../../store/currency/currency.selectors";
import { setConversionRate, setConversionSymbol } from "../../store/currency/currency.actions";

import './dashboard.styles.scss';


const Dashboard = () => {
	const dispatch = useDispatch();
	const devs = useSelector(selectDevs);
	const currencies = useSelector(selectCurrencies);
	const conversionId = Number(useSelector(selectConversionId));
	const conversionRate = useSelector(selectConversionRate);


	useEffect(() => {
		dispatch(getDevelopers());
	}, []);



	useEffect(() => {
		let exchangeRate;
		
		const getConverterRate = () => {
			currencies.map((currency) => {
				if(currency.id === conversionId) {
					dispatch(setConversionSymbol(currency.symbol));
					return exchangeRate = currency.divider;
				}
			})
			return exchangeRate;
		}
		getConverterRate();
		dispatch(setConversionRate(exchangeRate));

	}, [conversionId])
	
	return (
		<div className='dashboard'>
			<div className="dashboard-container">
			{devs ? (
				devs.map((profile) => {
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
				: <div>No Developers to Display</div> 
			}
			</div>
			<div className="dashboard-footer">
				<Footer />
				<CurrencySelect />
			</div>
		</div>
	)
};


export default Dashboard;