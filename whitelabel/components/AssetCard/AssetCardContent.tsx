import AssetPopularityBar from "../AssetPopularityBar";
import PopularityInfo from "../AssetPopularityBar/PopularityInfo";
import Tooltip from "../shared/Tooltip";
import React, { useState } from "react";
import Eth from "../../icons/Eth";
import { useTranslation } from 'react-i18next';
import { clsxm } from "../../lib/clsxm";
import '../../i18n/i18n-instance'
import { ClassValue } from "clsx";
type Props = {
  showRarityPrice?: boolean;
  showTotalBids?: boolean;
  showPopularity?: boolean;
  popularity: number;
  customStyle?:any;
  customIconStyle?:any;
  iconClassName?:any;
  iconBootstrapStyle?:any;
  classes?: ClassValue;
};

const AssetContent = (props: Props) => {
  const [toggleRarityPrice, setToggleRarityPrice] = useState(props.showRarityPrice);
  const [toggleTotalBids, setToggleTotalBids] = useState(props.showTotalBids);
  const [togglePopularity, setTogglePopularity] = useState(props.showPopularity);
  const [t, i18n] = useTranslation();
  return (
    <div>
      <div className={clsxm("bg-gradient-to-b from-white/[.1] to-white/[0] py-4 px-5",props?.classes) }>
        <div className="relative box-border flex h-full flex-col gap-2 font-semibold text-off-white">
          {toggleRarityPrice && (
            <div className="flex items-center justify-between">
              <div>{t('rarityPrice')}</div>
              <div className="flex items-center">
                <div className="mr-3 flex items-center gap-1">
                  <Eth customIconStyle={props?.customIconStyle} className={ props.iconBootstrapStyle == null ? `h-[10px] w-[6px] fill-current ${props.iconClassName}` : `h-[10px] w-[6px] fill-current ${props.iconBootstrapStyle}`}  />
                  <div>1.89 ETH</div>
                </div>
                <div className="text-off-white/[.5]">($5.2k)</div>
              </div>
            </div>
          )}
          {toggleTotalBids && (
            <div className="flex items-center justify-between">
              <div>{t('totalBids')}</div>
              <div>16</div>
            </div>
          )}

          {togglePopularity && (
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="mr-1">{t('popularity')}</div>
                <Tooltip text={<PopularityInfo />} placement="bottom" />
              </div>
              <div className="w-full max-w-[115px] pt-[7px]">
                <AssetPopularityBar popularity={props.popularity} size="small" />
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetContent;
