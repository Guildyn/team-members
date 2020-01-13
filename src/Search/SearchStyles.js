import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles({
	search: {
		border: '0.0625rem solid darkgrey',
		padding: '0.9375rem',
		marginRight: 30,
		backgroundColor: '#FAFAFA',
		overflow: 'hidden'
	},
	searchPadding: {
		padding: '0%'
	},
	searchInput: {
		border: '0.0625rem solid darkgrey',
		width: '300px',
		backgroundColor: '#FFF',
	},
	counter: {
		fontWeight: '700',
		fontSize: 'big',
		textAlign: 'right',
		width: '100%',
		float: 'right',
		color: '#494949',
		paddingRight: '1.5625rem',
		justifyContent: 'center'
	},
	searchInfo: {
		padding: '0.125rem'
	}
})