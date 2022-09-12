import { clamp } from "lodash"
import React from "react"

import PopularityIcon from "./PopularityIcon"

type Props = {
  popularity: number
  size?: "small" | "large"
}

export default function AssetPopularityBar({
  popularity = 100,
  size = "large",
}: Props) {
  const clampedPopularity = clamp(popularity, 0, 100)

  return (
    <div className="relative">
      <div
        className={`${
          size === "large" ? "h-[11px]" : "h-[6px]"
        } rounded-full bg-[#545454]`}
      >
        <div
          className="h-full bg-popularity-bar"
          style={{
            clipPath: `inset(0 ${100 - clampedPopularity}% 0 0 round 9999px)`,
          }}
        />
      </div>

      <div className={`${size === "large" ? "mt-[10px]" : "mt-[3px]"}`}>
        <div
          className="relative w-max -translate-x-1/2 transform"
          style={{ left: `${clampedPopularity}%` }}
        >
          <div  className={`mx-auto ${size === "large" ? "w-4" : "w-3"}`}>
            <PopularityIcon popularity={clampedPopularity} />
          </div>

          {size === "large" && (
            <span className="inline-block w-max text-xs font-semibold text-off-white">
              {clampedPopularity >= 67 && 'Very Popular'}
              {clampedPopularity < 67 && clampedPopularity >= 34 && 'Popular'}
              {clampedPopularity < 34 && 'Unpopular'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
