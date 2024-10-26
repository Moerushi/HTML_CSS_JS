import React from 'react'

export const Sorting = () => {
  return (
    <div class="sort">

    <details class="sort__details">
      <summary class="sort__summary">
        <span class="sort__heading">TRENDING NOW</span>
      </summary>
    </details>

    <details class="sort__details">
      <summary class="sort__summary">
        <span class="sort__heading">SIZE</span>
      </summary>

      <div class="sort__box">

        <label class="sort__check" for="xs-size">
          <input class="sort__check__checkbox" type="checkbox" id="xs-size" />
          XS</label>

        <label class="sort__check" for="s-size">
          <input class="sort__check__checkbox" type="checkbox" id="s-size" />
          S</label>

        <label class="sort__check" for="m-size">
          <input class="sort__check__checkbox" type="checkbox" id="m-size" />
          M</label>

        <label class="sort__check" for="l-size">
          <input class="sort__check__checkbox" type="checkbox" id="l-size" />
          L</label>

      </div>

    </details>

    <details class="sort__details">
      <summary class="sort__summary">
        <span class="sort__heading">PRICE</span>
      </summary>
    </details>
  </div>
  )
}
