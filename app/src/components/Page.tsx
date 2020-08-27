import * as React from "react";
import {CompProps} from "./helper/types";
import Headline from "./header/Headline";

export interface PageProps extends CompProps {
  title: string;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <Headline>{props.title}</Headline>
    </div>
  );
}

export default Page;
