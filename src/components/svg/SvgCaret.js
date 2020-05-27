import React from "react";

const SvgCaret = props => (
  <svg
    className="caret"
    height="12px"
    width="8px"
    viewBox="0 0 8 12"
    {...props}
  >
    <g
      transform="translate(-1127 -1251) rotate(45 -946.005 1988.495)"
      // fill="#14CC95"
      stroke="none"
    >
      <path d="M0 2L7.999 2 7.999 0 0 0z" />
      <path d="M6 8L8 8 8 0.001 6 0.001z" />
    </g>
  </svg>
);

export default SvgCaret;
