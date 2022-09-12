import React from "react";
import { IconProps } from "../types/icons";

const Heart = ({ 
  className = "w-full h-full fill-current",
  customIconStyle
 }: IconProps) => {
  return (
    <svg
      className={className}
      style={customIconStyle ? customIconStyle : {height:"20px",width:"22px"}}
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6 0C14.0304 0 16 2.02703 16 4.86486C16 10.5405 10 13.7838 8 15C6 13.7838 0 10.5405 0 4.86486C0 2.02703 2 0 4.4 0C5.888 0 7.2 0.810811 8 1.62162C8.8 0.810811 10.112 0 11.6 0ZM8.7472 12.6519C9.452 12.2011 10.088 11.7527 10.6832 11.2727C13.068 9.35108 14.4 7.25108 14.4 4.86486C14.4 2.95135 13.1704 1.62162 11.6 1.62162C10.7392 1.62162 9.808 2.08378 9.1312 2.76811L8 3.91459L6.8688 2.76811C6.192 2.08378 5.2608 1.62162 4.4 1.62162C2.848 1.62162 1.6 2.96432 1.6 4.86486C1.6 7.25189 2.9328 9.35108 5.316 11.2727C5.912 11.7527 6.548 12.2011 7.2528 12.6511C7.492 12.8043 7.7288 12.9511 8 13.1149C8.2712 12.9511 8.508 12.8043 8.7472 12.6519Z" />
    </svg>
  );
};

export default Heart;
