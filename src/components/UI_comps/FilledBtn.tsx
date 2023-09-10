import React from "react"

interface IFilledBtn {
  children: JSX.Element
}
export const FilledBtn: React.FC<IFilledBtn> = ({children}) => {
  return (
    <div className="filled-item">
      {children}
    </div>
  )
}