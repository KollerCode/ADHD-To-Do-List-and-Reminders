import React, { useState } from "react";
import SpinnerIcon from "../images/SpinnerIcon.gif"

function Spinner() {
  const [spin,setSpin] = useState(0)
 
  return (
    <div>
      <img
        className="spinner-image"
        src={SpinnerIcon}
        alt=''
        onClick={() => setSpin(1)}
        onAnimationEnd={() => setSpin(0)}
        spin={spin}
      />
    </div>
    )
}

export default Spinner