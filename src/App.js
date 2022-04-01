import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={Home} />
        {/* <Route path="/design" exact element={Design} />
        <Route path="/development" exact element={Development} />
        <Route path="/about" exact element={About} />
        <Route path="/contact" exact element={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
