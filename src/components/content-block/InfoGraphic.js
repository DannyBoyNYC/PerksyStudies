import React from "react"

import Square from "../svg/Square"
import Circle from "../svg/Circle"

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
        <div className="square square1 small c1">
          <Square />
        </div>
        <div className="square square2 big c2">
          <Square />
        </div>
        <div className="square square3 c1">
          <Square />
        </div>
        <div className="square square4 small c3">
          <Square />
        </div>
        <div className="square square5 c1">
          <Square />
        </div>
        <div className="square square6 big c1">
          <Square />
        </div>
        <div className="square square7 c3">
          <Square />
        </div>
        <div className="square square8 small c3">
          <Square />
        </div>
        <div className="circle circle1 small c1">
          <Circle />
        </div>
        <div className="circle circle2 c2">
          <Circle />
        </div>
        <div className="circle circle3 small c3">
          <Circle />
        </div>
        <div className="circle circle4 big c1">
          <Circle />
        </div>
        <div className="circle circle5 c3">
          <Circle />
        </div>
        <div className="circle circle6 small c2">
          <Circle />
        </div>
        <div className="circle circle7 c1">
          <Circle />
        </div>
        <div className="circle circle8 small c3">
          <Circle />
        </div>
      </div>
    </div>
  )
}
