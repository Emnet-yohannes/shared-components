import React from "react"
import { IconProps } from "../types/icons"

export default function Icircle({
  className = "fill-current w-full h-full",
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.964 2.268L6.928 1.134L7.928 2.866L5.964 4L7.928 5.134L6.928 6.866L4.964 5.732V8H2.964V5.732L1 6.866L0 5.134L1.964 4L0 2.866L1 1.134L2.964 2.268V0H4.964V2.268Z" />
    </svg>
  )
}
