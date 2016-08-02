import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
    static propTypes = {
        /**
         * Emulate native HTML placeholder attribute
         */
        placeholder: PropTypes.string,
        /**
         * The text string to use for the default value.
         */
        defaultValue: PropTypes.string,
        /**
         * Specifies the type of input to display such as "password" or "text".
         */
        type: PropTypes.string,
    };

    static defaultProps = {
        placeholder: null,
        defaultValue: null,
        type: 'text',
    };

    render() {
        const { placeholder, ...props } = this.props;

        return <TextField hintText={placeholder} {...props} />;
    }
}

export default Input;
