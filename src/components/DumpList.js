import React from "react";
import Dumps from "./Dumps"

function DumpList({ dumps, onDeleteDump, onUpdateDump }) {
    console.log(dumps)
  return (
    <div>
      <h2 className="brain-dump-title">📝My Random Thoughts and Inspirations🤔</h2>
      <ul>
        {dumps &&
          dumps.map((dump) => (
            <Dumps
              key={dump.id}
              dump={dump}
              onDeleteDump={onDeleteDump}
              onUpdateDump={onUpdateDump}
            />
          ))}
      </ul>
    </div>
  );
}

export default DumpList; 