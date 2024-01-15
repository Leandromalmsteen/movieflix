import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import MovieRoute from 'pages/MovieRoute';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <MovieRoute />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
