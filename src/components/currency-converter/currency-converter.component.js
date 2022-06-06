import React from 'react';

import { ReactComponent as ArrowDropdown } from '../../assets/down-arrow.svg';

import './currency-converter.styles.scss';


const CurrencyConverter = () => {
	return (
		<div className="converter">
				<div className='converter-currency'>
					<span className='converter-flag'>F</span>
					<span className='converter-name'>Naira</span>
				</div>
				<ArrowDropdown className='converter-dropdown' />
		</div>
	);
}

export default CurrencyConverter;
