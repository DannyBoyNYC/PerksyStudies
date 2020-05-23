import React from "react"

import Square from "../svg/Square"

export const InfoGraphic = () => {
  return (
    <div className="frame">
      <div className="edges">
        <div className="edge t"></div>
        <div className="edge l"></div>
        <div className="edge r"></div>
        <div className="edge b"></div>
      </div>
      <div className="elements">
        <div className="square square1 small c1"></div>
        <Square />
      </div>
      <div class="square square2 big c2">
        <Square />
      </div>
      <div class="square square3 c1">
        <Square />
      </div>
      <div class="square square4 small c3">
        <Square />
      </div>
    </div>
  )
}
