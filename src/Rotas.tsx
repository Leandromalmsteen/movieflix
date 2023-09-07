import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Rotas = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);

export default Rotas;
