import { useState } from "react"
interface IBurgerIcon {
  menuHandler: () => void;
}
export const BurgerIcon: React.FC<IBurgerIcon> = ({menuHandler}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burgerIcon" onClick={() => {setIsOpen(!isOpen); menuHandler()}}>
      <div className={`burgerIcon__line burgerIcon__lineTop ${isOpen && 'burgerIcon__lineTop_open'}`}></div>
      <div className={`burgerIcon__line ${isOpen && 'burgerIcon__line_center'}`}></div>
      <div className={`burgerIcon__line burgerIcon__lineBottom ${isOpen && 'burgerIcon__lineBottom_open'}`}></div>
    </div>
  )

}
