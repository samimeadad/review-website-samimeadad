import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Teachers from './components/Teachers/Teachers';

function App () {
  return (
    // code for all router
    <div>
      <Router>
        {/* router for header and navbar */ }
        <Header></Header>
        <Switch>
          {/* Route for home page */ }
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* Route for home page */ }
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* Route for courses page */ }
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          {/* Route for instructors page */ }
          <Route exact path="/teachers">
            <Teachers></Teachers>
          </Route>
          {/* Route for about us page */ }
          <Route exact path="/about">
            <About></About>
          </Route>
          {/* Route for login page */ }
          <Route exact path="/login">
            <Login></Login>
          </Route>
          {/* Route for 404 error page */ }
          <Route exact path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        {/* Route for footer page */ }
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;