import React from "react";
import { IconProps } from "../types/icons"

const Flame = ({
  className = "fill-current w-full h-full"
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.16398 24C10.2126 24 12.1773 23.1179 13.6258 21.5479C15.0744 19.9778 15.8882 17.8483 15.8882 15.6279C15.8882 14.6612 15.6513 13.7336 15.3732 12.8707C13.6564 14.7092 12.3526 15.6279 11.4596 15.6279C15.5741 7.81395 13.3135 4.46512 7.13409 0C7.64903 5.5814 4.2545 8.11981 2.87238 9.52967C1.74498 10.6791 0.962172 12.1691 0.625444 13.8065C0.288716 15.4439 0.413603 17.1532 0.983913 18.7128C1.55422 20.2723 2.54365 21.6102 3.82391 22.553C5.10417 23.4957 6.61621 23.9999 8.16398 24ZM8.89521 4.1693C12.2331 7.23907 12.2496 9.62456 9.67072 14.5217C8.88697 16.0097 9.87876 17.8605 11.4596 17.8605C12.1682 17.8605 12.885 17.6372 13.642 17.1963C13.4176 18.115 12.9995 18.9646 12.4207 19.6784C11.8419 20.3922 11.118 20.9506 10.3062 21.3096C9.49444 21.6687 8.61683 21.8185 7.7425 21.7474C6.86818 21.6764 6.02102 21.3863 5.26772 20.9C4.51442 20.4137 3.87555 19.7445 3.40142 18.9451C2.92729 18.1458 2.63085 17.238 2.53542 16.2933C2.43999 15.3486 2.5482 14.3929 2.85151 13.5012C3.15482 12.6096 3.64496 11.8064 4.28334 11.155C4.41311 11.0233 5.07121 10.3903 5.10004 10.3624C5.53672 9.93823 5.89615 9.56205 6.25147 9.15014C7.51824 7.67888 8.42866 6.04688 8.89418 4.1693H8.89521Z" />
    </svg>
  );
};

export default Flame;