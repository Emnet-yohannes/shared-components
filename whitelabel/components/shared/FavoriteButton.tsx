import React from "react";
import Heart from "../../icons/Heart";
type Props = {
    isLoggedIn?: boolean;
    makeFavorite?: any;
  };
const FavoriteButton = (props:Props) => {
  return (
    <button disabled={!props?.isLoggedIn} onClick={props?.makeFavorite}>
      <div>
        <Heart className="w-4 fill-current text-off-white" />
      </div>
    </button>
  );
};

export default FavoriteButton;
