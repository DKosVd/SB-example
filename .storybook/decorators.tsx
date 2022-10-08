import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import { BrowserRouter } from 'react-router-dom';

const withRouter:DecoratorFn = (StoryFn) => (
  <BrowserRouter>
    <StoryFn/>
  </BrowserRouter>
)

const withTheme:DecoratorFn = (StoryFn, context) => {
    const theme = context.globals.theme === 'dark' ? darkTheme: lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <StoryFn/>
        </ThemeProvider>
    )
}

export const globalDecorators = [withTheme, withRouter];
