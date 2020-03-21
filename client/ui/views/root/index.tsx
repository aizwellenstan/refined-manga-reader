import * as React from 'react';
// import { ThemeProvider, styled } from 'client/ui/styles';
// import { I18nextProvider } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';
// import NoSSR from 'react-no-ssr';
// import { getLocale } from 'client/ui/locales';
// import { theme } from 'client/ui/styles/theme';
// import { Events } from 'client/ui/views/events';
// import { Banner } from 'client/ui/components/banner';
// import { GlobalStyle } from './global-style';

import Home from 'client/src/home';
import { Manga } from 'client/src/manga';
import { MangaChapter } from 'client/src/manga-chapter';

// const locale = getLocale();

// const Wrapper = styled.main`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   background-color: ${({ theme }) => theme.backgroundWash};
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

export const Root = () => {
  return (
    <>
      {/* <I18nextProvider i18n={locale}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Content>
              <Banner />

              <Switch>
                <Redirect exact from="/" to="/events" />
                <Route path="/events" component={Events} />
              </Switch>
            </Content>
          </Wrapper>

          <GlobalStyle />

          <NoSSR>
            <GettingStarted />
          </NoSSR>
        </ThemeProvider>
      </I18nextProvider> */}
      <div className="main-container">
        <Switch>
        <Route 
            component={MangaChapter} 
            path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)/:chapterId([a-z0-9]{24})" 
          />
          <Route 
            component={Manga} 
            path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)" 
          />
          <Route component={Home} path="/" />
        </Switch>
      </div>
    </>
  );
};
