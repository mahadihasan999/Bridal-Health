
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import ViewProfile from './Pages/Home/Service/ViewProfile/ViewProfile';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Register from './Pages/Register/Register';
import Services from './Pages/Home/Services/Services';
import Lab from './Pages/Lab/Lab';
import UrgentCare from './Pages/UrgentCare/UrgentCare';
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
            <Route path="/login">
              <Login> </Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/lab">
              <Lab></Lab>
            </PrivateRoute>
            <PrivateRoute path="/urgent">
              <UrgentCare></UrgentCare>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/viewProfile/:serviceId" >
              <ViewProfile></ViewProfile>
            </Route>

            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
