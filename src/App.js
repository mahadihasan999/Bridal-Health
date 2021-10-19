
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
