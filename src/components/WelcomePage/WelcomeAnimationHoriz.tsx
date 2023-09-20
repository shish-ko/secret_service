import React from "react";
import horiz_1 from '../../assets/images/animation_chips/Line_Vertical_1.png';
import horiz_2 from '../../assets/images/animation_chips/Line_Vertical_2.png';
import horiz_3 from '../../assets/images/animation_chips/Line_Vertical_3.png';

export const WelcomeAnimationHoriz: React.FC = () => {
  return (
    <div className="chipScrollHorizontal">
      <div className="chipScrollHorizontal__line chipScrollHorizontal__line_left">
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
        <img src={horiz_1}></img>
      </div>
      <div className="chipScrollHorizontal__line chipScrollHorizontal__line_right">
        <img src={horiz_2}></img>
        <img src={horiz_2}></img>
        <img src={horiz_2}></img>
        <img src={horiz_2}></img>
      </div>
      <div className="chipScrollHorizontal__line chipScrollHorizontal__line_left">
        <img src={horiz_3}></img>
        <img src={horiz_3}></img>
        <img src={horiz_3}></img>
        <img src={horiz_3}></img>
      </div>
    </div>
  )
}