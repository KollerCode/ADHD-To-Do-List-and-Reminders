import React from "react";

function BrainDump() {
const getBrainDumps = fetch("/dumps")
  .then((response) => response.json())
  .then((data) => console.log(data.dumps));
}

export default BrainDump