import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#405667',
    },
    secondary: {
      main: '#ff0046',
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Navbar>
          
        <Switch>
          {/* <Route path='/UI-Design-Trial/' exact component= {Home} />
          <Route path='/UI-Design-Trial/ProgressPage' exact component= {ProgressPage} /> */}
        </Switch>
        </Navbar>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

