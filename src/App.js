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
import FutureTasks from './components/FutureTasks';

function App({todos, onUpdateToDo, onDeleteToDo}) {
  const [quote, setQuote] = useState({});
  // const [todos, setToDos] = useState([]);
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((r) => r.json())
      .then((quotes) => {
        let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
        setQuote(quotes[randomIndex])
      });
  }, []);

  //  useEffect(() => {
  //    fetch("http://localhost:4000/todos")
  //      .then((r) => r.json())
  //      .then((data) => setToDos(data));
  //  }, []);

  

  //  function deleteToDo(id) {
  //    const updatedTodos = todos.filter((todo) => todo.id !== id);
  //    setToDos(updatedTodos);
  //  }

  //  function updateToDo(id) {
  //    const updatedToDos = todos.map((todo) => {
  //      if (todo.id === id) {
  //        return { ...todo, future: true };
  //      } else {
  //        return todo;
  //      }
  //    });
  //    setToDos(updatedToDos);
  //  }

  return (
    <>
      <Router>
        <div>
          <header>
            <NavBar />
            <Header />
            <DailyQuote randomQuote={quote} />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/braindump" element={<BrainDump />} />
            <Route path="/about-adhd" element={<About />} />
            <Route path="/future-tasks" element={<FutureTasks todos={todos} onDeleteToDo = { onDeleteToDo } onUpdateToDo={onUpdateToDo} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App