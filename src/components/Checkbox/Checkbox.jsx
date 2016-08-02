import React, { Component, PropTypes } from 'react';
import MuiCheckbox from 'material-ui/Checkbox';

class Checkbox extends Component {
    static propTypes = {
        /**
         * Label for checkbox
         */
        label: PropTypes.string,
        /**
         * Checkbox is checked if true
         */
        checked: PropTypes.bool,
        /**
         * The SvgIcon to use for the checked state. This is useful to create icon toggles.
         */
        checkedIcon: PropTypes.element,
        /**
         * The default state of our checkbox component. Warning: This cannot be used in conjunction with checked. Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components
         */
        defaultChecked: PropTypes.bool,
        /**
         * The SvgIcon to use for the unchecked state. This is useful to create icon toggles.
         */
        uncheckedIcon: PropTypes.element,
        /**
         * Disabled if true.
         */
        disabled: PropTypes.bool,
        /**
         * Where the label will be placed next to the checkbox.
         */
        labelPosition: PropTypes.oneOf(['left','right']),
        /**
         * Callback function that is fired when the checkbox is checked.
         *
         * **Signature :**
         *
         *  `function(event: object, isInputChecked: boolean)` => void
         *  - `event`: change event targeting the underlying checkbox input.
         *  - `isInputChecked`: The checked value of the underlying checkbox input.
         */
        onCheck: PropTypes.func,
        /**
         * ValueLink for when using controlled checkbox.
         */
        valueLink: PropTypes.object,
    };

    static defaultProps = {
        disabled: false,
        labelPosition: 'right',
    };

    componentDidMount() {

    }

    render() {
        const { ...props } = this.props;

        return <MuiCheckbox {...props} />;
    }
}

export default Checkbox;
