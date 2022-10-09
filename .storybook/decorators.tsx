import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/app-state/store';
import { Provider as StoreProvider } from 'react-redux';

initialize();

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

const withStore:DecoratorFn = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState
  });
  return (
    <StoreProvider store={store}>
      <StoryFn/>
    </StoreProvider>
  )
}

export const globalDecorators = [mswDecorator, withTheme, withRouter, withStore];
