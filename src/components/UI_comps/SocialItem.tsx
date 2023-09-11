import React from "react";

interface ISocialItem {
  imgUrl: string,
  link: string,
}
export const SocialItem: React.FC<ISocialItem> = ({imgUrl, link}) => {
  return (
    <a className="social-link" href={link}>
      <img src={imgUrl} />

    </a>
  )
}