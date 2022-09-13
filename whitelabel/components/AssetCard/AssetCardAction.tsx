import React, { useState, useEffect } from "react";
import Eth from '../../icons/Eth';
import Heart from '../../icons/Heart'
import '../../i18n/i18n-instance'
import { clsxm } from "../../lib/clsxm";
import { ClassValue } from "clsx";
type Props = {
  showFavorite: boolean;
  favNumber?:number;
  customStyle?:any;
  customIconStyle?:any;
  iconClassName?:any;
  iconBootstrapStyle?:any;
  classes?: ClassValue;
};
const AssetCardAction = (props: Props) => {
  const [toggleFavorite, setToggleFavorite] = useState(props.showFavorite);

  return (
    <div >
      <div className={clsxm("px-5 pt-4 pb-2 text-[13px]",props?.classes)}>
      <div className="mt-5 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Eth customIconStyle={props?.customIconStyle} className={props.iconBootstrapStyle==null ? `h-[15px] w-[9px] fill-current ${props.iconClassName}` : `h-[15px] w-[9px] fill-current ${props.iconBootstrapStyle}`} />
          <div>ETH</div>
        </div>
        {toggleFavorite && (
          <div className="flex items-center gap-2">
            <div className="text-[10px] text-white">{props.favNumber}</div>
            <button>
              <Heart customIconStyle={props?.customIconStyle} className={props.iconBootstrapStyle==null ? `h-5 w-[22px] fill-off-white ${props.iconClassName}` : `h-5 w-[22px] fill-off-white ${props.iconBootstrapStyle}`}/>
              </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default AssetCardAction;
