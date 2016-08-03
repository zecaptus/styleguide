/* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button';

describe('<Button />', () => {
    const mountWithTheme = (node) => mount(<MuiThemeProvider>{node}</MuiThemeProvider>);

    console.log(Button, mountWithTheme);
});
