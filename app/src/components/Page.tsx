import * as React from "react";
import {CompProps} from "./helper/types";
import Headline from "./header/Headline";
import '../css/Page.css';
import PageDescription from "./content/PageDescription";

export interface PageProps extends CompProps {
  title: string;
  description?: string;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <Headline>{props.title}</Headline>
      <hr/>
      {props.description && <PageDescription style={{textAlign: "center"}} content={props.description}/>}
      {props.children}
    </div>
  );
}

export default Page;
