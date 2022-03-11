import React from "react";

function Spinner() {
    let $spin = document.querySelector("[data-js-spin]");
    function handleSpin() {
         spin($spin, { theta: 0, av: 30 });
    }

    function spin(el, { theta, av }) {
      theta += av;
      el.style.transform = `rotate(${theta}deg)`;
      av *= 0.99;
      if (av < 0.001) return;

      requestAnimationFrame(() => {
        spin(el, { theta, av });
      });
    }
    return (
  <div class='spinner-image'>
    <img src='https://cdn.shopify.com/s/files/1/1735/5803/products/fidget-spinner-red-min_800x.jpg?v=1501497752' alt=''/>
            <button class='push-button' onClick={} data-js-spin>Spin me!</button>
</div>
    )
}

export default Spinner