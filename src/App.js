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
import Teachers from './components/Teachers/Teachers';

function App () {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;