import React from "react";

interface IChipScroll {
  direction: "up" | "down",
  chips: string[];
}
export const ChipScroll: React.FC<IChipScroll> = ({direction, chips}) => {
  return (
    <div className={`chipScroll__column chipScroll__column_${direction}`}>
      {chips.map((imageUrl, ind) => <img src={imageUrl} key={ind} />)}  
    </div>
  )
}