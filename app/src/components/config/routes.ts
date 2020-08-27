import startPage from "../pages/startPage";
import twitchPage from "../pages/twitchPage";
import podcastPage from "../pages/podcastPage";
import videoPage from "../pages/videoPage";
import socialMediaPage from "../pages/socialMediaPage";
import projectPage from "../pages/projectPage";
import patreonPage from "../pages/patreonPage";
import impressumPage from "../pages/impressumPage";
import dataSecurityPage from "../pages/dataSecurityPage";
import contactPage from "../pages/contactPage";
import defaultPage from "../pages/defaultPage";
import {LangDE} from "./langDE";

export const routes = {
  start: {href: "/", title: LangDE.startTitle, component: startPage},
  twitch: {href: "/twitch", title: LangDE.twitchTitle, component: twitchPage},
  podcasts: {href: "/podcasts", title: LangDE.podcastsTitle, component: podcastPage},
  videos: {href: "/videos", title:LangDE.videosTitle, component: videoPage},
  socialMedia: {href: "/social-media", title:LangDE.socialMediaTitle, component: socialMediaPage},
  projects: {href: "/projects", title: LangDE.projectsTitle, component: projectPage},
  patreon: {href: "/patreon", title: LangDE.patreonTitle, component: patreonPage},
  impressum: {href: "/impressum", title: LangDE.impressumTitle, component: impressumPage},
  datenschutz: {href: "/datenschutz", title: LangDE.dataSecurityTitle, component: dataSecurityPage},
  kontakt: {href: "/kontakt", title: LangDE.contactTitle, component: contactPage},
  default: {href: "/(.*)", title: LangDE.defaultTitle, component: defaultPage},
}
