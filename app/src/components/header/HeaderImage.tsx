import * as React from "react";
import {CSSProperties} from "react";
import {useRouter} from "react-router-ts";
import {routes} from "../config/routes";
import startbanner from "../../images/banner1024.png"
import banner2 from "../../images/bunner_2_1024.png"

function HeaderImage() {
  const router = useRouter();
  let style: CSSProperties = {};
  let imageString:string;
  let altString:string;
  switch (router.path) {
    case routes.twitch.href:
    case routes.videos.href:
    case routes.projects.href:
    case routes.patreon.href:
      imageString = banner2;
      altString = "Gutelaune Typ Banner 2";
      break;
    case routes.default.href:
      imageString = startbanner;
      altString = "Gutelaune Typ Banner";
      break;
    default:
      imageString = startbanner;
      altString = "Gutelaune Typ Banner";
      break;

  }
  if (imageString) {
    style = {backgroundImage: "url(" + imageString + ")"}
  }
  return (
    <div className="header-image">
      <img src={imageString} alt={altString}/>
      <div className="header-image-blur" style={style}/>
    </div>
  );
}

export default HeaderImage;
