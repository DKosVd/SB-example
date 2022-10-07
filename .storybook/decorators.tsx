import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withTheme:DecoratorFn = (StoryFn) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle/>
            <StoryFn/>
        </ThemeProvider>
    )
}

export const globalDecorators = [withTheme];