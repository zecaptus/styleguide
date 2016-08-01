import { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Wrapper extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	};

	theme() {
		return getMuiTheme({
			palette: {
				primary1Color: '#6363AD'
			},
			appBar: {
				height: 50
			}
		});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={this.theme()}>
				{this.props.children}
			</MuiThemeProvider>

		);
	}
}
