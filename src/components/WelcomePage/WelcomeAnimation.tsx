import { ChipScroll } from "@comps/UI_comps/ChipScroll";
import vertical_1 from '../../assets/images/animation_chips/Line_Vertical_1.png';
import vertical_2 from '../../assets/images/animation_chips/Line_Vertical_2.png';
import vertical_3 from '../../assets/images/animation_chips/Line_Vertical_3.png';


export const WelcomeAnimation = () => {
  return (
    <div className="chipScroll">
        <ChipScroll direction="down" imgUrl={vertical_1} />
        <ChipScroll direction="up" imgUrl={vertical_2} />
        <ChipScroll direction="down" imgUrl={vertical_3} />
    </div>
  )
}