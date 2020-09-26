import {faGamepad, faProjectDiagram, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import {LangDE} from "./langDE";
import {AppRoutesInterface} from "./routes";
import {SitePreviewInterface} from "../helper/types";
import {faInstagram, faPatreon, faYoutube} from "@fortawesome/free-brands-svg-icons";

interface SitePreviewContent {
  twitch: SitePreviewInterface;
  podcasts: SitePreviewInterface;
  videos: SitePreviewInterface;
  socialMedia: SitePreviewInterface;
  project: SitePreviewInterface;
  patreon: SitePreviewInterface;
}

export const getSitePreviewContent = (routes: AppRoutesInterface): SitePreviewContent => ({
  twitch: {
    icon: faGamepad,
    headline: LangDE.twitchTitle,
    description: LangDE.twitchShortDescription,
    buttonText: "Ab gehts",
    buttonLink: routes.twitch.href,
  },
  podcasts: {
    icon: faVolumeUp,
    headline: LangDE.podcastsTitle,
    description: LangDE.podcastsShortDescription,
    buttonText: "Anhören !!!",
    buttonLink: routes.podcasts.href,
  },
  videos: {
    icon: faYoutube,
    headline: LangDE.videosTitle,
    description: LangDE.videosShortDescription,
    buttonText: "Mal anschauen",
    buttonLink: routes.videos.href,
  },
  socialMedia: {
    icon: faInstagram,
    headline: LangDE.socialMediaTitle,
    description: LangDE.socialMediaShortDescription,
    buttonText: "Mal abchecken",
    buttonLink: routes.socialMedia.href,
  },
  project: {
    icon: faProjectDiagram,
    headline: LangDE.projectsTitle,
    description: LangDE.projectsShortDescription,
    buttonText: "Zeig her",
    buttonLink: routes.projects.href,
  },
  patreon: {
    icon: faPatreon,
    headline: LangDE.patreonTitle,
    description: LangDE.patreonShortDescription,
    buttonText: "Will dabei sein",
    buttonLink: routes.patreon.href,
  },
})