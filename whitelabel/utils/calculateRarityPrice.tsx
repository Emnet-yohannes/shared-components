export const calculateRarityPrice = (rarityProperty: any) => {
    return (
      rarityProperty[1]?.buy_quantity /
      Math.pow(10, rarityProperty[1]?.buy_decimals)
    )
  }