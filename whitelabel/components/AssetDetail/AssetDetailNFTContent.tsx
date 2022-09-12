import React, { useState, useEffect } from "react";
import { AssetI } from "../../types/common/index";
import { calculateRarityPrice } from "../../utils/calculateRarityPrice";
import AssetPopularityBar from "../AssetPopularityBar/index";
import Heart from "../../icons/Heart";
import HorizontalStats from "../../icons/HorizontalStats";
import CircularGrid from "../../icons/CircularGrid";
import truncateText from "../../utils/truncateText";
import ActionsBar from "../shared/ActionBar";
import FavoriteButton from "../shared/FavoriteButton";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n-instance";
import { clsxm } from "../../lib/clsxm";
import {ClassValue} from 'clsx'
interface Props {
  asset: AssetI;
  contractAddress?: string;
  floorPrice?: any;
  showAssetDescription?: boolean;
  showRarity?: boolean;
  showPopularity?: boolean;
  showProperty?: boolean;
  showNftDetail?: boolean;
  showOwner?: boolean;
  showActionBar?: boolean;
  showFollowers?: boolean;
  isLoggedIn?: boolean;
  makeFavorite?: any;
  customStyle?: any;
  iconClassName?: any;
  iconBootstrapStyle?: any;
  classes?:ClassValue;
}

export default function AssetDetailNFTContent(props: Props) {
  const [toggleFollowers, setToggleFollowers] = useState<boolean>(false);
  const [toggleNftDescription, setToggleNftDescription] = useState<boolean>(false);
  const [toggleRarityPrice, setToggleRarityPrice] = useState<boolean>(false);
  const [togglePopularity, setTogglePopularity] = useState<boolean>(false);
  const [toggleNftDetail, setToggleNftDetail] = useState<boolean>(false);
  const [toggleOwner, setToggleOwner] = useState<boolean>(false);
  const [toggleActionBar, setToggleActionBar] = useState<boolean>(false);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (props.showAssetDescription) {
      setToggleNftDescription(props.showAssetDescription);
    }
  }, [props.showAssetDescription]);

  useEffect(() => {
    if (props.showFollowers) {
      setToggleFollowers(props.showFollowers);
    }
  }, [props.showFollowers]);

  useEffect(() => {
    if (props.showRarity) {
      setToggleRarityPrice(props.showRarity);
    }
  }, [props.showRarity]);

  useEffect(() => {
    if (props.showPopularity) {
      setTogglePopularity(props.showPopularity);
    }
  }, [props.showPopularity]);

  useEffect(() => {
    if (props.showNftDetail) {
      setToggleNftDetail(props.showNftDetail);
    }
  }, [props.showNftDetail]);

  useEffect(() => {
    if (props.showOwner) {
      setToggleOwner(props.showOwner);
    }
  }, [props.showOwner]);

  useEffect(() => {
    if (props.showActionBar) {
      setToggleActionBar(props.showActionBar);
    }
  }, [props.showActionBar]);

  const price = Object.entries(props?.asset?.rarity)
    .map((property: any) => calculateRarityPrice(property))
    .reduce((price, minPrice) => (minPrice < price ? minPrice : price), Number.POSITIVE_INFINITY);

  return (
    <div
      style={props?.customStyle}
      className={clsxm("mb-12 space-y-12",props?.classes)}>
      <div>
        <div className="mb-8 flex items-start justify-between">
          {toggleRarityPrice && (
            <div className="flex items-center gap-3 font-extrabold">
              <div className="w-4">
                <HorizontalStats className="w-auto fill-current text-white" />
              </div>

              <div>{t("rarityPrice")}</div>
              <div className="text-green">{price} ETH</div>
            </div>
          )}
          {toggleActionBar && (
            <div className="relative space-y-10">
              <ActionsBar />
            </div>
          )}
        </div>
        <div className="mb-4">{toggleNftDetail && <h1 className="font-bold">{props?.asset?.collection?.name}</h1>}</div>
        <div className="space-y-3 pb-4">
          <h1 className="text-2xl font-extrabold">{props?.asset?.name}</h1>
          <div className="flex justify-between">
            {toggleOwner && (
              <div className="text-xs text-off-white">
                {/* {"Owned by: "} */}
                {t("ownedBy")}
                <a href="#" className="text-red">
                  {truncateText(props?.asset?.user, 6, 4)}
                </a>
              </div>
            )}

            {toggleFollowers && (
              <div className="flex gap-1 text-xs">
                <FavoriteButton isLoggedIn={props?.isLoggedIn} makeFavorite={props?.makeFavorite} />
                <div>
                  {props?.asset?.followers} {t("followers")}
                </div>
              </div>
            )}
          </div>
          {toggleNftDescription && (
            <div>
              {props.asset.description && (
                <div className="mt-4">
                  <div className="mb-2">
                    <h1 className="font-bold">{t("description")}</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-normal">{props?.asset?.description}</h1>
                  </div>
                </div>
              )}
            </div>
          )}
          <div>
            {toggleNftDetail && (
              <div>
                <div className="mt-4">
                  <div className="mb-2">
                    <h1 className="font-bold">{t("contractAddress")}</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-normal">{props?.contractAddress}</h1>
                  </div>
                </div>
                <div className="mt-4 flex w-full justify-between">
                  <div className="w-full">
                    <div className="mb-2">
                      <h1 className="font-bold">{t("tokenId")}</h1>
                    </div>
                    <div>
                      <h1 className="text-sm font-normal">{props?.asset?.token_id}</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-2">
                      <h1 className="font-bold">{t("floorPrice")}</h1>
                    </div>
                    <div>
                      <h1 className="text-sm font-normal">{props.floorPrice}  ETH</h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {togglePopularity && (
          <div className="border-t border-[#545454]/[.3] py-4">
            <div className="mb-1 flex items-center gap-2">
              <div className="w-4">
                <CircularGrid
                  className={
                    props?.iconBootstrapStyle
                      ? props?.iconBootstrapStyle
                      : `w-full fill-current text-white ${props?.iconClassName}`
                  }
                />
              </div>
              {t("popularity")}
              <h2 className="font-extrabold"></h2>
            </div>

            <p className="mb-6 max-w-[275px] text-sm text-white/[.5]">{t("popularityDescription")}</p>

            <AssetPopularityBar popularity={props?.asset.popularity} size="large" />
          </div>
        )}
        
      </div>
    </div>
  );
}
