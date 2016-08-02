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
});
