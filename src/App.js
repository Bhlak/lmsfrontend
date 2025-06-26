// import { useState } from 'react';
import './App.css';
import Pages from './pages/Pages.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
