import React from 'react';
// import "bootstrap"
import Header from './Header'
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ToDoList from './ToDoList';

function App() {
    return (
      // <Router>
        <div className="App">
        <header className="App-header">
          {/* <Header/> */}
          <NavBar />
          </header>
          {/* <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="legal" element={<Legal />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Home />} />
            <Route path="/community" element={<Culture />} />
          </Routes> */}
        </div>
        /* <footer className="App-footer">
          <Footer />
        </footer>
        </Router> */
    );
}

export default App
// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }