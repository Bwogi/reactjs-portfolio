import { Container } from '@mui/material';
import './App.css';
import Grid from '@mui/material/Grid';
import Profile from './components/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {  
  return (
    
    <Container>
      <Grid container>
        <Grid item style={{ backgroundColor: 'lightgrey'}}lg={3} md={4} sm={12} xs={12}>
          The profile grid
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: 'lightblue' }}>
           The Main grid
          <Header />

          <Router>
            <Switch>
                <Route path='/portfolio'>
                <Portfolio />
                </Route>

                <Route path='/'>
                <Resume />
                </Route>
            </Switch>
          </Router>
          <Footer />
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
