import React from "react";
import Eth from '../../icons/Eth';
import '../../i18n/i18n-instance'
import { useTranslation } from 'react-i18next';
import { clsxm } from "../../lib/clsxm";
import '../../i18n/i18n-instance'
import { ClassValue } from "clsx";
type Props = {
  collection?: {
    name: string;
    icon_url: string;
  };
  name?: string;
  ethPrice?: number;
  customStyle?:any;
  customIconStyle?:any;
  iconClassName?:any;
  iconBootstrapStyle?:any;
  classes?: ClassValue;
};
const AssetCardHeader = (props: Props) => {
  const [t, i18n] = useTranslation();
  return (
    <div >
      <div className={clsxm("px-5 pt-4 pb-2 text-[13px]",props?.classes)}>
        <div className="flex items-center justify-between font-semibold">
          <div className="text-off-white/[.5]">{props.collection?.name}</div>
          <div className="!text-red">Top Bid</div>
        </div>

        <div className="flex items-center justify-between font-bold text-white">
          <h2>{props.name}</h2>

          <div className="flex items-center gap-x-1">
            <Eth customIconStyle={props.customIconStyle} className={props.iconBootstrapStyle==null ? `h-[15px] w-[9px] fill-red ${props.iconClassName}` : `h-[15px] w-[9px] fill-red ${props.iconBootstrapStyle}`}  />
            <div>{props?.ethPrice} ETH</div>
          </div>
        </div>

        <div className="text-right text-[10px] text-off-white/[.5]">6 days left</div>
      </div>
    </div>
  );
};

export default AssetCardHeader;
