import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowDropdown } from '../../assets/down-arrow.svg';
import { getCurrencies, setConversionCurrency } from '../../store/currency/currency.actions';
import { selectConversionId, selectCurrencies } from '../../store/currency/currency.selectors';

import './currency-select.styles.scss';


const CurrencySelect = () => {

	const dispatch = useDispatch();
	const currencies = useSelector(selectCurrencies);
	const conversionId = useSelector(selectConversionId)
	const flagId = Number(conversionId);



	useEffect(() => {
		dispatch(getCurrencies());
	},[]);


	return (
		<div className="select">
				<div className='select-currency'>
					<div className='select-flag'>
					{currencies.map((currency) => {
						if(currency.id === flagId) {
							return (
								<img key={currency.id} src={currency.flag_url}  />
							);
						}
						return null

						})
					}
					</div>
					<select onChange={(e) => dispatch(setConversionCurrency(e.target.value))} className='select-dropdown'>
						{currencies.map((currency) => {
							return (
								<option key={currency.id} value={currency.id}>{currency.short}</option>
								);
							})
						}
				</select>
				</div>
				
		</div>
	);
}

export default CurrencySelect;
