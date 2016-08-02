import React from 'react';
import { mount } from 'enzyme';
import Checkbox from './Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe("<Checkbox />", () => {
    const mountWithTheme = (node) => mount(<MuiThemeProvider>{node}</MuiThemeProvider>);


    it('calls componentDidMount', () => {
        sinon.spy(Checkbox.prototype, 'componentDidMount');
        const wrapper = mountWithTheme(<Checkbox />);
        expect(Checkbox.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});