import Flame from "../../icons/Flame";
import Icicle from "../../icons/Icircle";
import Sun from "../../icons/Sun";

const data = [
  {
    title: 'Unpopular',
    icon: <Icicle className="w-[9px] h-[9px] fill-off-white" />
  },
  {
    title: 'Popular',
    icon: <Sun className="w-full h-full fill-off-white" />
  },
  {
    title: 'Very Popular',
    icon: <Flame className="w-full h-full fill-off-white" />
  },
]

export default function PopularityInfo() {
  return (
    <div className='flex flex-col gap-3'>
      {data.map(({ title, icon }, key) => (
        <div key={key} className='flex items-center gap-2'>
          <div className='w-[15px] h-[15px] flex items-center justify-center'>
            {icon}
          </div>
          <div className='text-off-white text-[13px] font-semibold'>{title}</div>
        </div>
      ))}
    </div>
  )
}