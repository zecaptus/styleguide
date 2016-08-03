import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';

const buttonComponents = {
    flat: FlatButton,
    raised: RaisedButton,
    floatingAction: FloatingActionButton,
    icon: IconButton,
};

class Button extends Component {
    /**
     * some description
     * @type {{type: *}}
     */
    static propTypes = {
        /**
         * Type of Button
         */
        type: PropTypes.oneOf(['flat', 'raised', 'floatingAction', 'icon']),
    };

    static defaultProps = {
        type: 'flat'
    };

    render() {
        const { type, ...props } = this.props;
        const ButtonComponent = buttonComponents[type];
        console.log(props.children);
        return <ButtonComponent {...props}>{this.props.children}</ButtonComponent>;
    }
}

export default Button;
