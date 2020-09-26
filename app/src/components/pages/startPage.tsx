import * as React from "react";
import Page from "../Page";
import {LangDE} from "../config/langDE";
import PageDescription from "../content/PageDescription";
import SitePreview from "../content/SitePreview";
import {getSitePreviewContent} from "../config/sitePreviewConfig";
import {routes} from "../config/routes";
import ColumnsContainer from "../grid/ColumnsContainer";

function startPage() {
  return (
    <Page title={LangDE.startTitle} description={LangDE.startDescription}>
      <PageDescription content={LangDE.startShortDescription}/>
        <ColumnsContainer>
          <SitePreview content={getSitePreviewContent(routes).twitch}/>
          <SitePreview content={getSitePreviewContent(routes).podcasts}/>
          <SitePreview content={getSitePreviewContent(routes).videos}/>
          <SitePreview content={getSitePreviewContent(routes).socialMedia}/>
          <SitePreview content={getSitePreviewContent(routes).project}/>
          <SitePreview content={getSitePreviewContent(routes).patreon}/>
        </ColumnsContainer>
    </Page>
  );
}

export default startPage;
