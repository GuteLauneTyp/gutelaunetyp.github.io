import * as React from "react";
import {Route, Switch} from "react-router-ts";
import {routes} from "../config/routes";
import startbanner from "../../images/banner1024.png"
import banner2 from "../../images/bunner_2_1024.png"

function HeaderImage() {
  return (
    <div className="header-image">
      <Switch>
        <Route path={routes.twitch.href}>
          <img src={banner2} alt={"Gutelaune Typ Banner 2"}/>
        </Route>
        <Route path={routes.videos.href}>
          <img src={banner2} alt={"Gutelaune Typ Banner 2"}/>
        </Route>
        <Route path={routes.projects.href}>
          <img src={banner2} alt={"Gutelaune Typ Banner 2"}/>
        </Route>
        <Route path={routes.patreon.href}>
          <img src={banner2} alt={"Gutelaune Typ Banner 2"}/>
        </Route>
        <Route path={routes.default.href}>
          <img src={startbanner} alt={"Gutelaune Typ Banner"}/>
        </Route>
      </Switch>
    </div>
  );
}

export default HeaderImage;
