
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import ViewProfile from './Pages/Home/Service/ViewProfile/ViewProfile';
import Service from './Pages/Home/Service/Service';
import AboutUs from './Pages/Home/AboutUs/AboutUs';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/viewProfile/:serviceId" >
              <ViewProfile></ViewProfile>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
