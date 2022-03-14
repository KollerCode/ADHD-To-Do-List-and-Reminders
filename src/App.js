import React from 'react';
// import "bootstrap"
import Header from './components/Header'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ToDoListForm from './components/ToDoListForm';
import BrainDump from './components/BrainDump'
import DailyQuote from './components/DailyQuote';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <NavBar />
            <Header />
            <DailyQuote />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/braindump" element={<BrainDump/>} />
            <Route path="/about-adhd" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App