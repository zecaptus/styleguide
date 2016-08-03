/* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import __COMPONENT__ from './__COMPONENT__';

describe('<__COMPONENT__ />', () => {
    const mountWithTheme = (node) => mount(<MuiThemeProvider>{node}</MuiThemeProvider>);


});
