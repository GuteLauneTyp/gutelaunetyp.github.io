import * as React from "react";
import {routes} from "../config/routes";
import {Route, Switch} from "react-router-ts";

function AppRoutes() {
  return (
    <Switch>
      <Route path={routes.start.href} component={routes.start.component}/>
      <Route path={routes.twitch.href} component={routes.twitch.component}/>
      <Route path={routes.podcasts.href} component={routes.podcasts.component}/>
      <Route path={routes.videos.href} component={routes.videos.component}/>
      <Route path={routes.socialMedia.href} component={routes.socialMedia.component}/>
      <Route path={routes.projects.href} component={routes.projects.component}/>
      <Route path={routes.patreon.href} component={routes.patreon.component}/>
      <Route path={routes.impressum.href} component={routes.impressum.component}/>
      <Route path={routes.datenschutz.href} component={routes.datenschutz.component}/>
      <Route path={routes.kontakt.href} component={routes.kontakt.component}/>
      <Route path={routes.default.href} component={routes.default.component}/>
    </Switch>
  );
}

export default AppRoutes;
