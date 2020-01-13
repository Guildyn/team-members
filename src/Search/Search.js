import React from 'react';
import { InputBase, Box, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from './SearchStyles';

const Search = React.forwardRef (({ ...props, children }, ref) => {
	const classes = styles()
	return ( 
		<Grid container className={classes.search}>
				<Grid item xs={3} >
					<Box className={classes.searchInput} >
						<IconButton className={classes.searchPadding} disabled >
							<SearchIcon />
						</IconButton>
						<InputBase {...props} inputRef={ref} />
					</Box>
				</Grid>
				<Grid item className={classes.searchInfo} xs={9} >
					<span className={classes.counter}>
						{children}
					</span>
				</Grid>
		</Grid>
	 );
})
 
export default Search;