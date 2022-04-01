import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/design" exact element={Design} />
        <Route path="/development" exact element={Development} />
        <Route path="/about" exact element={About} />
        <Route path="/contact" exact element={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
