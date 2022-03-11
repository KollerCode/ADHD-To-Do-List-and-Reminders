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
  console.log(quotes)

  return <p></p>;
}
  






export default DailyQuote;