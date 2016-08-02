/* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from './Input';

describe('<Input />', () => {
    const mountWithTheme = (node) => mount(<MuiThemeProvider>{node}</MuiThemeProvider>);

    it('calls componentDidMount', () => {
        sinon.spy(Input.prototype, 'componentDidMount');
        mountWithTheme(<Input />);
        expect(Input.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});
