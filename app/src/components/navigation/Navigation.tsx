import * as React from "react";
import {CompProps} from "../helper/types";

function Navigation(props:CompProps) {
  return (
    <div className="navigation">
      {props.children}
    </div>
  );
}

export default Navigation;
