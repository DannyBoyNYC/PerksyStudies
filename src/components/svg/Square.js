import React from "react"

const Square = props => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 16 16" {...props}>
    <defs>
      <style>{".cls-1{fill:#fff}"}</style>
    </defs>
    <circle className="cls-1" cx={8} cy={4} r={3.5} />
    <path d="M8 1a3 3 0 11-3 3 3 3 0 013-3m0-1a4 4 0 104 4 4 4 0 00-4-4z" />
    <path
      className="cls-1"
      d="M2.5 15.5V10A2.51 2.51 0 015 7.5h6a2.51 2.51 0 012.5 2.5v5.5z"
    />
    <path d="M11 8a2 2 0 012 2v5H3v-5a2 2 0 012-2h6m0-1H5a3 3 0 00-3 3v6h12v-6a3 3 0 00-3-3z" />
  </svg>
)

export default Square
