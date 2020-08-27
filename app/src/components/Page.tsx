import * as React from "react";
import {CompProps} from "./helper/types";
import Headline from "./header/Headline";
import '../css/Page.css';

export interface PageProps extends CompProps {
  title: string;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <Headline>{props.title}</Headline>
      {props.children}
    </div>
  );
}

export default Page;
