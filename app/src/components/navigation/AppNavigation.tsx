import * as React from "react";
import {routes} from "../config/routes";
import Navigation from "./Navigation";
import NavigationItem from "./NavigationItem";


function AppNavigation() {
  return (
    <Navigation>
      <NavigationItem href={routes.start.href}><span>"Icon"</span></NavigationItem>
      <NavigationItem href={routes.twitch.href}>{routes.twitch.title}</NavigationItem>
      <NavigationItem href={routes.podcasts.href}>{routes.podcasts.title}</NavigationItem>
      <NavigationItem href={routes.videos.href}>{routes.videos.title}</NavigationItem>
      <NavigationItem href={routes.socialMedia.href}>{routes.socialMedia.title}</NavigationItem>
      <NavigationItem href={routes.projects.href}>{routes.projects.title}</NavigationItem>
      <NavigationItem href={routes.patreon.href}>{routes.patreon.title}</NavigationItem>
    </Navigation>
  );
}

export default AppNavigation;