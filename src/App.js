import React from 'react';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddEdit from './Components/AddEdit';
import Home from './Components/Home';

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/add" element={ <AddEdit /> } />
               </Routes>
       </div>
    </Router>
  );
}

export default App;
