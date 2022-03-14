import React from "react";
import Dumps from "./Dumps"

function DumpList({ dumps, onDeleteDump, onUpdateDump }) {
    console.log(dumps)
  return (
    <div>
      <h2>📝My Random Thoughts and Inspirations🤔</h2>
      <ol>
        {dumps &&
          dumps.map((dump) => (
            <Dumps
              key={dump.id}
              dump={dump}
              onDeleteDump={onDeleteDump}
              onUpdateDump={onUpdateDump}
            />
          ))}
      </ol>
    </div>
  );
}

export default DumpList; 