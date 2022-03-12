import React from "react";
import SpinnerIcon from "../images/SpinnerIcon.gif"

function Spinner() {
var $spin = document.querySelector('[data-js-spin]')
    function handleSpin() {
         spin({SpinnerIcon}, { theta: 0, av: 30 });
    }

    function spin(el, { theta, av }) {
      theta += av;
      el = `rotate(${theta}deg)`;
      av *= 0.99;
      if (av < 0.001) return;

      requestAnimationFrame(() => {
        spin(el, { theta, av });
      });
    }
  
  return (
    <div class='spinner-image'>
    <img src={SpinnerIcon} alt=''/>
      <button className='push-button' onClick={handleSpin}>Spin me!</button>
    </div>
    )
}

export default Spinner