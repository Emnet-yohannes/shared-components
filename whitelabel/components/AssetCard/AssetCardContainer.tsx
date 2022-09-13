import React, { useEffect } from "react";
import "../../i18n/i18n-instance";
import { useTranslation } from "react-i18next";
import { ClassValue } from "clsx"
import { clsxm } from "../../lib/clsxm";
type Props = {
  children?: any;
  customStyle?: any;
  language?: string;
  classes?: ClassValue;
};
const AssetContainer = (props: Props) => {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    if (props?.language != null) {
      i18n.changeLanguage(props?.language);
    }
  }, [props?.language]);

  return (
  // <div style={props.customStyle} className={props.bootstrapStyle!=null ? `${props.bootstrapStyle}` : `overflow-hidden rounded-[5px] bg-[#181818] ${props.className}`}>
  //   {props.children}
  //   </div>;
  <div className={clsxm("overflow-hidden rounded-[5px] bg-[#181818]", props?.classes)}>
    {props?.children}
  </div>
  );
};
export default AssetContainer;
