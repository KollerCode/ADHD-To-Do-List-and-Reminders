import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

function DailyQuote() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("")
  // const [date, setDate] = useState("")

var d = new Date();

let month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
let date = d.getUTCDate();
let year = d.getUTCFullYear();

let dateStr = month + "/" + date + "/" + year;
  
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
      <Spinner />
      <h2>{dateStr}</h2>
    </div>
  );
}
  






export default DailyQuote;