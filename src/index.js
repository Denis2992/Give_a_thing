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
            fontSize: 14,
        },
        h5: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: 38,
        },
        button: {
            fontSize: 32,
            lineHeight: 1.3,
            fontWeight: 300,
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
