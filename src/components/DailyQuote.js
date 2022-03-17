import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

function DailyQuote({randomQuote}) {

var d = new Date();

let month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
let date = d.getUTCDate();
let year = d.getUTCFullYear();

let dateStr = month + "/" + date + "/" + year;
  

    // setText(randomQuote);
  
// more on line 11 and add more state for randomQuote

  return (
    <div>
      <Spinner /> 
      {!randomQuote ? null :<><h2 className="date">{dateStr}</h2>
      <strong><p className="quote">{randomQuote.text}-{randomQuote.author}</p></strong></>
      }
    </div>
  );
}
  






export default DailyQuote;