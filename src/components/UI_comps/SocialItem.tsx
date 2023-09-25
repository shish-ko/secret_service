import React from "react";

interface ISocialItem {
  imgUrl: string,
  link: string,
  alt: string,
}
export const SocialItem: React.FC<ISocialItem> = ({imgUrl, link, alt}) => {
  return (
    <a className="social-link" href={link}>
      <img src={imgUrl} alt={alt}/>
    </a>
  )
}