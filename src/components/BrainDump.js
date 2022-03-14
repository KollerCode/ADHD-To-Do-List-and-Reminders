import React, { useState, useEffect } from "react";
import NewDump from "./NewDump";
import DumpList from "./DumpList"

function BrainDump({  }) {
  const [dumps, setDumps] = useState([]);

  useEffect(() => {
      fetch("http://localhost:4000/dumps")
        .then((r) => r.json())
        .then((data) => setDumps(data));
    }, []);

    function addDump(newDump) {
      const updatedDumps = [...dumps, newDump];
      setDumps(updatedDumps);
    }

    function deleteDump(id) {
      const updatedDumps = dumps.filter((dump) => dump.id !== id);
      setDumps(updatedDumps);
    }
  

  return (
    <div className="braindump">
      <NewDump onAddDump={addDump} />
      <DumpList
        dumps={dumps}
        onDeleteDump={deleteDump}
      />
    </div>
  );
}

export default BrainDump