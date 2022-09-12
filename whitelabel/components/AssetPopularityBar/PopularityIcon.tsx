import Flame from "../../icons/Flame";
import Icircle from "../../icons/Icircle";
import Sun from "../../icons/Sun";

type Props = {
  popularity: number
}

export default function PopularityIcon({ popularity }: Props) {
  if (popularity >= 67) {
    return <Flame className="w-full fill-current text-[#FE7B28]" />
  }

  if (popularity >= 34) {
    return <Sun className="w-full fill-current text-[#F5CA0A]" />
  }

  return <Icircle className="w-full fill-current text-[#01FFF0]" />
}
