import { chips } from "@assets/constants/chips"
import { ChipScroll } from "@comps/UI_comps/ChipScroll"


export const WelcomeAnimation = () => {
  return (
    <div className="chipScroll">
        <ChipScroll direction="down" chips={chips.left} />
        <ChipScroll direction="up" chips={chips.center} />
        <ChipScroll direction="down" chips={chips.right} />
    </div>
  )
}