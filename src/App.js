import React, { useState, useEffect } from 'react';
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
import BrainDump from './components/BrainDump'
import DailyQuote from './components/DailyQuote';
import About from './components/About';
import Home from './components/Home';

function App() {
  const [quote, setQuote] = useState({});
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((r) => r.json())
      .then((quotes) => {
        let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
        setQuote(quotes[randomIndex])
      });
  }, []);


  return (
    <>
      <Router>
        <div>
          <header>
            <NavBar />
            <Header />
            <DailyQuote randomQuote={quote}/>
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