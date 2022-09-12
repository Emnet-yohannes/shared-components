import React, { useEffect } from "react";
import "../../i18n/i18n-instance";
import { useTranslation } from "react-i18next";
import { clsxm } from "../../lib/clsxm";
import { ClassValue } from "clsx";
// import { loadLanguages } from "i18next";
type Props = {
  children?: any;
  language?: string;
  customStyle?: any;
  classes?:ClassValue;
};
export default function AssetDetailContainer(props: Props) {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    if (props?.language != null) {
      i18n.changeLanguage(props?.language);
    }
  }, [props?.language]);
  return (
    <div
      style={props.customStyle}
      className={clsxm("overflow-hidden bg-gradient-to-b from-black to-[#191919] text-white",props?.classes)}>
      {props.children}
    </div>
  );
}
