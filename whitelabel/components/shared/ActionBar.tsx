import { createPopper } from "@popperjs/core"
import { uniqueId } from "lodash"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"

// import RefreshIcon from "components/icons/Refresh"
import SystemIcon from "../../icons/System"
import ShareIcon from "../../icons/Share"
import SocialSharers from "./SocialSharers"

export default function ActionsBar() {
  const [showSharers, setShowSharers] = useState<boolean>(false)
  const [sharerId, setSharerId] = useState<string>("")

  const referenceElement = useRef(null)
  const sharerElement = useRef(null)

  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => location && setUrl(location.href), [])

  useEffect(() => setSharerId(uniqueId("social-sharer-button-")), [])

  useLayoutEffect(() => {
    // @ts-ignore
    createPopper(referenceElement.current, sharerElement.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 24],
          },
        },
      ],
    })
  }, [showSharers])

  return (
    <>
      <div className="flex items-center gap-6 fill-current">
        {/* <button>
          <RefreshIcon className="w-6" />
        </button> */}

        {url && (
          <Link href={url}>
            <a target="_blank" rel="noreferrer">
              <SystemIcon className="w-6 fill-white" />
            </a>
          </Link>
        )}

        <button
          id={sharerId}
          ref={referenceElement}
          onClick={() => setShowSharers((prev) => !prev)}
        >
          <ShareIcon className={`w-6 ${showSharers ? "fill-blue" : ""}`} />
        </button>
      </div>

      <div ref={sharerElement} className={showSharers ? "" : "hidden"}>
        <SocialSharers />
      </div>
    </>
  )
}
