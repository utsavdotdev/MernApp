import React from 'react'
import Home from './Home';
import Edit from './components/Edit';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
  
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/edit/:_id" element={<Edit/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
