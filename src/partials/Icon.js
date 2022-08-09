import React from "react";

export const Icon = (props) => {
  const { icon, size, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.07 9"
      style={{ height: size, width: size }}
    >
      <title>{icon}</title>
      <g id="OBJECTS">
        <IconPath icon={icon} color={color} />
      </g>
    </svg>
  );
};

const IconPath = (props) => {
  const { icon, color } = props;
  switch (icon) {
    case "gear":
      return (
        <path
          style={{ fill: color }}
          d="M7.72,4.91V4.09L7,3.72a2.09,2.09,0,0,0-.17-.41L7,2.57,6.46,2l-.73.26a2.65,2.65,0,0,0-.42-.18L5,1.32H4.13l-.37.75a3.12,3.12,0,0,0-.42.18L2.61,2,2,2.57l.25.74a2.09,2.09,0,0,0-.17.41l-.76.37v.82l.76.37a2.09,2.09,0,0,0,.17.41L2,6.43,2.61,7l.73-.26a3.12,3.12,0,0,0,.42.18l.37.75H5l.36-.75a2.65,2.65,0,0,0,.42-.18L6.46,7,7,6.43l-.25-.74A2.09,2.09,0,0,0,7,5.28ZM6.33,4.5A1.79,1.79,0,1,1,4.54,2.71,1.79,1.79,0,0,1,6.33,4.5Z"
        />
      );
      break;
    case "loop":
      return (
        <>
          <circle
            style={{ fill: "none", stroke: color, "stroke-miterlimit": 10 }}
            cx="5.05"
            cy="4.25"
            r="2.3"
          />
          <line
            style={{
              fill: "none",
              stroke: color,
              "stroke-miterlimit": 10,
              "stroke-linecap": "round",
            }}
            x1="3.43"
            y1="5.87"
            x2="1.99"
            y2="7.32"
          />
        </>
      );
      break;
    case "user":
      return (
        <>
          <path
            style={{ fill: color }}
            d="M6.16,4.55a2.19,2.19,0,0,1-3.46,0,1.53,1.53,0,0,0-1.2,1.5V7H7.35V6.05A1.53,1.53,0,0,0,6.16,4.55Z"
          />
          <path
            style={{ fill: color }}
            d="M6.1,3.2A1.67,1.67,0,1,1,4.43,1.53,1.67,1.67,0,0,1,6.1,3.2Z"
          />
        </>
      );
      break;
    case "down":
      return (
        <>
          <line
            style={{
              fill: "none",
              stroke: color,
              "stroke-miterlimit": 10,
            }}
            x1="4.35"
            y1="1.69"
            x2="4.35"
            y2="7.1"
          />
          <polyline
            style={{
              fill: "none",
              stroke: color,
              "stroke-miterlimit": 10,
            }}
            points="6.86 4.6 4.36 7.1 1.85 4.6"
          />
        </>
      );
      break;
    case "up":
      return (
        <>
          <line
            style={{
              fill: "none",
              stroke: color,
              "stroke-miterlimit": 10,
            }}
            x1="4.43"
            y1="7.1"
            x2="4.43"
            y2="1.69"
          />
          <polyline
            style={{
              fill: "none",
              stroke: color,
              "stroke-miterlimit": 10,
            }}
            points="1.93 4.19 4.43 1.69 6.93 4.19"
          />
        </>
      );
      break;
    case "stack":
      return (
        <>
          <polygon
            style={{ fill: color }}
            points="4.46 1.55 0.15 2.99 4.46 4.42 8.78 2.99 4.46 1.55"
          />
          <polygon
            style={{ fill: color }}
            points="4.46 5.14 1.51 4.16 0.15 4.61 4.46 6.05 8.78 4.61 7.42 4.16 4.46 5.14"
          />
          <polygon
            style={{ fill: color }}
            points="7.3 5.83 4.46 6.77 1.63 5.83 1.51 5.83 0.15 6.28 4.46 7.71 8.78 6.28 7.42 5.83 7.3 5.83"
          />
        </>
      );
      break;
    case "screen":
      return (
        <>
          <path
            style={{ fill: color }}
            d="M.05,1.77V5.68a.63.63,0,0,0,.63.63H8a.63.63,0,0,0,.63-.63V1.77A.63.63,0,0,0,8,1.14H.68A.63.63,0,0,0,.05,1.77ZM7.62,5.43H1V2h6.6Z"
          />
          <rect
            style={{ fill: color }}
            x="3.78"
            y="5.67"
            width="1.08"
            height="1.93"
          />
          <rect
            style={{ fill: color }}
            x="2.73"
            y="7.25"
            width="3.17"
            height="0.47"
          />
          <polygon
            style={{ fill: color }}
            points="3.6 2.89 5.04 3.73 3.6 4.56 3.6 2.89"
          />
        </>
      );
      break;
    case "money":
      return (
        <>
          <path
            style={{ fill: color }}
            d="M4.46,1.92c-1.24,0-2.83,2.42-2.83,4.44S2.9,8.48,4.46,8.48s2.83-.09,2.83-2.12S5.43,1.92,4.46,1.92Zm.22,5,0,.62H4.2l0-.63c-.52,0-1-.3-1-.83h.85v0c0,.23.26.28.39.28s.38,0,.38-.18c0-.36-1.55,0-1.55-1,0-.55.42-.76.94-.8l0-.63h.52l0,.62c.51,0,1,.26,1,.77H4.8c0-.19-.2-.23-.32-.23s-.33,0-.33.15c0,.35,1.56,0,1.56,1C5.71,6.63,5.25,6.84,4.68,6.89Z"
          />
          <path
            style={{ fill: color }}
            d="M3.94,1.64a1.29,1.29,0,0,1,.52-.13A1.08,1.08,0,0,1,5,1.69,1.28,1.28,0,0,0,5.34.9c0-.3-.59.08-.88.08S3.59.6,3.59.9A1.19,1.19,0,0,0,3.94,1.64Z"
          />
        </>
      );
      break;
    default: {
      return <></>;
    }
  }
};
