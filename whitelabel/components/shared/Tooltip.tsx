import React, { useRef, useLayoutEffect, useEffect, useState } from "react"

import { createPopper } from "@popperjs/core"
import { uniqueId } from "lodash"
import styled, { keyframes } from "styled-components"

import QuestionMark from "../../icons/CircleQuestionMark"
import Portal from "./Portal"

interface SCWrapperI {
  isHidden: boolean
}

const appear = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`

const disappear = keyframes`
  from{
    opacity: 1
  }
  to{
    opacity: 0
  }
`
//a little change here
const SCWrapper = styled.div<SCWrapperI>`
  animation: ${(props: { isHidden: boolean }) => props.isHidden ? disappear : appear} 0.2s ease-out forwards;
`

type Props = {
  element?: React.ReactNode | string
  placement?: any
  text: React.ReactNode | string
}

export default function Tooltip({ text, placement = "right", element }: Props) {
  const [id, setId] = useState<string>(uniqueId("tooltip-"))
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
  const [tooltipIsVisible, setTooltipIsVisible] = useState<boolean>(false)
  
  const referenceElement = useRef(null)
  const tooltipElement = useRef(null)

  useEffect(() => setId(uniqueId("tooltip-")), [])

  useLayoutEffect(() => {
    // @ts-ignore
    createPopper(referenceElement.current, tooltipElement.current, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 16],
          },
        },
      ],
    })
  }, [tooltipIsVisible])

  useEffect(() => {
    if (!isMouseOver) {
      setTimeout(() => {
        setTooltipIsVisible(false)
      }, 200);
    }
  }, [isMouseOver])

  return (
    <>
      <div
        ref={referenceElement}
        onMouseOver={() => {
          setIsMouseOver(true)
          setTooltipIsVisible(true)
        }}
        onMouseLeave={() => setIsMouseOver(false)}
        aria-describedby={id}
      >
        {element || (
          <QuestionMark className="h-4 w-4 fill-current text-[#A2A2A2] cursor-help" />
        )}
      </div>

      <Portal>
        <SCWrapper
          ref={tooltipElement}
          id={id}
          role="tooltip"
          className="popper-tooltip z-40 rounded-[4px] bg-blue px-3 py-4 text-left text-sm font-extrabold text-white"
          hidden={!tooltipIsVisible}
          isHidden={!isMouseOver}
        >
          {text}

          <div
            className="popper-arrow bg-blue before:bg-blue"
            data-popper-arrow
          />
        </SCWrapper>
      </Portal>
    </>
  )
}
