import { useEffect, useState } from "react"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share"

import Rhombus from "../../icons/Rhombus"

export default function SocialSharers() {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => location && setUrl(location.href), [])

  if (!url) return <></>

  return (
    <div className="w-[184px] rounded-[4px] bg-blue">
      <div className="absolute -top-[7px] w-full">
        <div className="flex justify-center">
          <Rhombus />
        </div>
      </div>

      <div className="px-4 py-3 space-y-1 text-base">
        <TwitterShareButton url={url}>
          <div className="flex items-center justify-around">
            <TwitterIcon size={20} round />
            <div className="ml-[14px] font-extrabold">Twitter</div>
          </div>
        </TwitterShareButton>

        <FacebookShareButton url={url}>
          <div className="flex items-center justify-around">
            <FacebookIcon size={20} round />
            <div className="ml-[14px] font-extrabold">Facebook</div>
          </div>
        </FacebookShareButton>

        <RedditShareButton url={url}>
          <div className="flex items-center justify-around">
            <RedditIcon size={20} round />
            <div className="ml-[14px] font-extrabold">Reddit</div>
          </div>
        </RedditShareButton>

        <LinkedinShareButton url={url}>
          <div className="flex items-center justify-around">
            <LinkedinIcon size={20} round />
            <div className="ml-[14px] font-extrabold">LinkedIn</div>
          </div>
        </LinkedinShareButton>
      </div>
    </div>
  )
}
