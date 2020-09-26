import React, {CSSProperties} from "react";
import {CompProps, SitePreviewInterface} from "../helper/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouteLink} from "react-router-ts";
import '../../css/SitePreview.css';
import Column from "../grid/Column";

interface SitePreviewProps extends CompProps {
  style?: CSSProperties;
  content: SitePreviewInterface;
}

function SitePreview(props: SitePreviewProps) {

  const routeLink = useRouteLink(props.content.buttonLink);

  return (
    <Column colCount={3} maxWidth={"initial"}>
      <div className="site-preview" style={props.style}>
        <div className={"site-preview-bubble-container"}>
          <div className={"site-preview-bubble"}>
            <FontAwesomeIcon size={"2x"} icon={props.content.icon}/>
          </div>
        </div>
        <h4>{props.content.headline}</h4>
        <p className={"site-preview-description"}>{props.content.description}</p>
        <div className={"site-preview-link-placeholder"}/>
        <div className={"site-preview-link-container"}>
          <div className={"site-preview-link"}>
            <a href={props.content.buttonLink}>
              <button onClick={routeLink.onClick}>
                {props.content.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </Column>
  );
}

export default SitePreview;
