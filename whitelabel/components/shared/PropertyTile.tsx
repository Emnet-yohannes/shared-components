import { clsxm } from '../../lib/clsxm'
import {ClassValue} from 'clsx'
interface Props {
    label?: string
    value?: string
    occurrence: number
    customStyle?: any;
    classes?:ClassValue;
  }
  
  export default function PropertyTile(props: Props) {
    return (
      <div style={props?.customStyle} className={clsxm(`rounded-[5px] bg-white px-6 py-4 text-center capitalize `,props?.classes)}>
        <div className={`text-sm text-[#8E8B8F]`}>{props?.label}</div>
  
        <div className={`text-lg font-extrabold text-[#F6F6F6]`}>{props?.value}</div>
  
        <div className={`text-sm text-[#8E8B8F]`}>{props?.occurrence.toFixed(2)}
        &#37; have this trait</div>
      </div>
    );
  }