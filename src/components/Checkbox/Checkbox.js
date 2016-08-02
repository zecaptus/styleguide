import React, { Component, PropTypes } from 'react';
import MuiCheckbox from 'material-ui/Checkbox';

class Checkbox extends Component {
    static propTypes = {
        label: PropTypes.string,
        checkedIcon: PropTypes.element,
        uncheckedIcon: PropTypes.element,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    componentDidMount() {

    }

    render() {
        const {...props} = this.props;

        return <MuiCheckbox {...props} />;
    }
}

export default Checkbox;