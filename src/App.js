import React from 'react';
// import "bootstrap"
import Header from './components/Header'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import ToDoListForm from './components/ToDoListForm';
import BrainDump from './components/BrainDump'
import DailyQuote from './components/DailyQuote';

function App() {
  return (
    <>
      {/* <Router> */}
        <div>
          <header>
          <NavBar />
          <Header />
          <DailyQuote />
          </header>
          {/* <Routes> */}
            <div className="main-form">
          {/* <Route path="/" element={<ToDoListForm />} /> */}
          <ToDoListForm />
            </div>
        {/* <Route path="/braindump" element={<BrainDump />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App