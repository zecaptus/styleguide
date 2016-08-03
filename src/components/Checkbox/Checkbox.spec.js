/* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
    const mountWithTheme = (node) => mount(<MuiThemeProvider>{node}</MuiThemeProvider>);

    it('calls componentDidMount', () => {
        sinon.spy(Checkbox.prototype, 'componentDidMount');
        mountWithTheme(<Checkbox />);
        expect(Checkbox.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('Should call onCheck when we toggle the checkbox', () => {
        const obj = { check: (e) => e.target.checked };
        sinon.spy(obj, 'check');
        const wrapper = mountWithTheme(<Checkbox onCheck={obj.check} />);

        wrapper.find('input').simulate('change', { target: { checked: true } });
        wrapper.find('input').simulate('change', { target: { checked: false } });

        expect(obj.check.calledTwice).to.equal(true);
        expect(obj.check.firstCall.returned(true)).to.equal(true);
        expect(obj.check.secondCall.returned(false)).to.equal(true);
    });

    it('Should be checked with "checked" props', () => {
        const wrapper = mountWithTheme(<Checkbox checked />);

        expect(wrapper.find('input').node.checked).to.equal(true);
    });
});
