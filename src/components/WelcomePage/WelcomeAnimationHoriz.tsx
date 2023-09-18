import React from "react";
import horiz_1 from '../../assets/images/animation_chips/Line_Vertical_2.png';

export const WelcomeAnimationHoriz: React.FC = () => {
  return (
    <div className="chipScrollHorizontal">
      <div className="chipScrollHorizontal__line chipScrollHorizontal__line_left">
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
      </div>
    </div>
  )
}