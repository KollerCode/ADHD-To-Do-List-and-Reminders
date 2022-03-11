import React, { useState, useEffect } from "react";

function DailyQuote() {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((quotes) => setQuotes(quotes))
  }, []);
  // console.log(quotes)
  
  let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
  let randomQuote = quotes[randomIndex]
// more on line 11 and add more state for randomQuote

  return (
    <h1>{randomQuote.text}</h1>
  )
}
  






export default DailyQuote;