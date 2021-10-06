import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FAD648',
            dark: '#5E5322',
        },
        secondary: {
            main: '#3C3C3C',
            light: '#F0F1F1',
        },
        text: {
            primary: '#3C3C3C',
            secondary: '#737373',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
        fontSize: 18,
        body2: {
            fontSize: 16,
        },
        h5: {
            fontSize: 28,
            lineHeight: 1.6,
        },
        h4: {
            fontSize: 35,
        },
        button: {
            fontSize: 32,
            lineHeight: 1.3,
            fontWeight: 300,
        },
        body1: {
            fontSize: 18,
        },
        h6: {
            fontSize: 24,
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: 26,
            fontFamily: 'Merriweather',
        },
        subtitle2: {
            fontFamily: 'Merriweather',
            fontSize: 18,
        },
    },
});

const Index = () => {
    return (
        <App/>
    );
}

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Index />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
