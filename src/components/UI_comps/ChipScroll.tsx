import React from "react";

interface IChipScroll {
  direction: "up" | "down" | "left" | "right",
  imgUrl: string;
}
export const ChipScroll: React.FC<IChipScroll> = ({direction, imgUrl}) => {
  const mainDirection = (direction === 'down' || direction === 'up') ? 'column' : 'row'
  return (
    <div className={`chipScroll__${mainDirection} chipScroll__${mainDirection}_${direction}`}>
      <img src={imgUrl} alt='background animation' />  
      <img src={imgUrl} alt='background animation' />  
      <img src={imgUrl} alt='background animation' />  
      <img src={imgUrl} alt='background animation' />  
    </div>
  )
}

