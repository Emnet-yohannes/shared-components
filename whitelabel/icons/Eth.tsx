import React from "react";
import { IconProps } from "../types/icons";

const   Eth = ({
  className = "fill-current w-full h-full",
  customIconStyle
}: IconProps) => {
  return (
    <svg
      className={className}
      style={customIconStyle ? customIconStyle : {height:"15px",width:"9px"}}
      viewBox="0 0 8 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.53473 0L3.45752 0.262437V7.87774L3.53473 7.95481L7.06967 5.86532L3.53473 0Z" />
      <path d="M3.53494 0L0 5.86532L3.53494 7.95484V4.2586V0Z" />
      <path d="M3.53473 9.10518L3.49121 9.15823V11.8715L3.53473 11.9986L7.07244 7.01636L3.53473 9.10518Z" />
      <path d="M3.53558 11.9986V9.10518L0 7.01636L3.53558 11.9986Z" />
      <path d="M3.53491 7.95545L7.07044 5.8656L3.53491 4.25859V7.95545Z" />
      <path d="M0 5.8656L3.53553 7.95548V4.25859L0 5.8656Z" />
    </svg>
  );
};

export default Eth;
