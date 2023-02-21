import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#paint0_linear_165830_3652)"
        d="M17 1.732a6 6 0 016 0l11.32 6.536a6 6 0 013 5.196v13.072a6 6 0 01-3 5.196L23 38.268a6 6 0 01-6 0L5.68 31.732a6 6 0 01-3-5.196V13.464a6 6 0 013-5.196L17 1.732z"
      ></path>
      <path
        fill="#030303"
        d="M14.375 20.173l5.755-9.548v.005l.001-.005 5.754 9.547.003.002-5.755 3.401h-.002l-.001-.001v.001l-5.755-3.402z"
      ></path>
      <path
        fill="#030303"
        d="M20.13 29.371v.004l-5.755-8.11 5.755 3.4v.002l.001-.002 5.758-3.4-5.758 8.11-.001-.004z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_165830_3652"
          x1="-6.932"
          x2="35.862"
          y1="-43.11"
          y2="-37.748"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8D8D"></stop>
          <stop offset="1" stopColor="#F7FC0E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;