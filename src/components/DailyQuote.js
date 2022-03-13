import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

function DailyQuote() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("")
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((r) => r.json())
      .then((quotes) => setQuotes(quotes))
  }, []);

  
    let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
    let randomQuote = quotes[randomIndex];
    
    // setText(randomQuote);
  
// more on line 11 and add more state for randomQuote

  return (
    <div>
    {/* <h1 >{randomQuote}</h1> */}
    <Spinner />
    </div>
  )
}
  






export default DailyQuote;