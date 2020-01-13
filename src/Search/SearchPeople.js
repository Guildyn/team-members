import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';


const SearchPeople = React.forwardRef (({ ...props, counter }, ref) => {
	const people = counter === 0 ?
		<span>No People Found</span> :
		<span>{counter} People</span> 
	return ( 
		<Search {...props} ref={ref} >
			{people}
		</Search>
	 );
});

SearchPeople.propTypes = {
	counter: PropTypes.number
}
 
export default SearchPeople;