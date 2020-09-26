import React from "react";
import {CompProps} from "../helper/types";
import '../../css/Grid.css';
import {Property} from "csstype";

interface ColumnsContainerProps extends CompProps {
  alignItems?: Property.AlignItems;
  height?: Property.Height<string>;
}

function ColumnsContainer(props: ColumnsContainerProps) {
  return (
    <div className="columns-container"
         style={{
           alignItems: props.alignItems ? props.alignItems : "initial",
           height: props.height ? props.height : "initial"
         }}>
      {props.children}
    </div>
  );
}

export default ColumnsContainer;
