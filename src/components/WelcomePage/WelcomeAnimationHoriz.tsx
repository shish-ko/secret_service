import { ChipScroll } from "@comps/UI_comps/ChipScroll";
import React from "react";
import horiz_1 from '../../assets/images/animation_chips/Line_Horizontal_1.png';
import horiz_2 from '../../assets/images/animation_chips/Line_Horizontal_2.png';
import horiz_3 from '../../assets/images/animation_chips/Line_Horizontal_3.png';

export const WelcomeAnimationHoriz: React.FC = () => {
  return (
    <div className="chipScrollHorizontal">
      <ChipScroll imgUrl={horiz_1} direction='left' />
      <ChipScroll imgUrl={horiz_2} direction='right' />
      <ChipScroll imgUrl={horiz_3} direction='left' />
    </div>
  )
}