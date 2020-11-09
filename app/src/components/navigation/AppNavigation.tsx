import * as React from "react";
import {routes} from "../config/routes";
import Navigation from "./Navigation";
import NavigationItem from "./NavigationItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

function AppNavigation() {
  return (
    <Navigation>
      <NavigationItem href={routes.start.href}><FontAwesomeIcon size={"2x"} icon={faHome}/></NavigationItem>
      <NavigationItem href={routes.twitch.href}>{routes.twitch.title}</NavigationItem>
      <NavigationItem href={routes.podcasts.href}>{routes.podcasts.title}</NavigationItem>
      <NavigationItem href={routes.videos.href}>{routes.videos.title}</NavigationItem>
      <NavigationItem href={routes.socialMedia.href}>{routes.socialMedia.title}</NavigationItem>
      <NavigationItem href={routes.projects.href}>{routes.projects.title}</NavigationItem>
      <NavigationItem href={routes.patreon.href}>{routes.patreon.title}</NavigationItem>
      <div className={"navigation-item"}>
        <span>
          <a href={"https://github.com/GuteLauneTyp/gutelaunetyp.github.io"}>Entwicklung</a>
        </span>
      </div>
    </Navigation>
  );
}

export default AppNavigation;