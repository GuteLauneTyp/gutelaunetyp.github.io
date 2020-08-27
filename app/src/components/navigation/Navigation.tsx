import * as React from "react";
import {CompProps} from "../helper/types";
import '../../css/Navigation.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

function Navigation(props: CompProps) {
  return (
    <div className="navigation">
      <div className="navigation-main-icon">
        <FontAwesomeIcon size={"4x"} icon={faGamepad}/>
      </div>
      {props.children}
    </div>
  );
}

export default Navigation;
