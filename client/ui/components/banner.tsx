import * as React from 'react';
import { styled } from 'client/ui/styles';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logoSmall from 'client/assets/logo-small.png';
import { BANNER } from 'client/ui/styles/z-indices';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  position: relative;
  z-index: ${BANNER};
  box-sizing: border-box;
  flex: 0 0 auto;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 8px 14px;
  border-bottom: 1px solid ${({ theme }) => theme.borderNormal};
  background-color: ${({ theme }) => theme.backgroundNormal};
`;

const LogoSmall = styled.img`
  display: block;
  height: 34px;
  margin: auto;
`;

const LogoLarge = styled.img`
  display: block;
  height: 34px;
  margin: 4px 0;
`;

const Title = styled.h1`
  display: none;
`;

const Hgroup = styled.div`
  flex: 1 1 auto;

  ${LogoLarge} {
    display: none;
  }

  @media screen and (min-width: 700px) {
    ${LogoLarge} {
      display: block;
    }

    ${LogoSmall} {
      display: none;
    }
  }
`;

const Toolbox = styled.div`
  display: none;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 18px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: auto;
  color: ${({ theme }) => theme.highlightNormal};
  font-size: 24px;
`;

const OriginalLink = styled.a`
  display: block;
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.highlightNormal};
  color: ${({ theme }) => theme.foregroundReverse};
  font-size: 12px;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }

  svg {
    margin-right: 0.5em;
  }
`;

export const Banner = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Hgroup>
        <Link to="/">
          <Title>itsukara</Title>
          {/* <LogoLarge src={logoLarge} alt="itsukara" /> */}
          <LogoLarge src={logoSmall} alt="itsukara" />
          <LogoSmall src={logoSmall} alt="itsukara" />
        </Link>
      </Hgroup>

      <Toolbox>
        {/* <a
          href="#"
          target="__blank"
          rel="noreferrer"
          title={t('banner.view_twitter', {
            defaultValue: 'View Twitter',
          })}
          aria-label={t('banner.view_twitter', {
            defaultValue: 'View Twitter',
          })}
        >
          <Icon icon={faTwitter} />
        </a> */}

        <a
          href="https://github.com/aizwellenstan/itsukara-pureweb"
          target="__blank"
          rel="noreferrer"
          title={t('banner.view_source', { defaultValue: 'View Source' })}
          aria-label={t('banner.view_source', { defaultValue: 'View Source' })}
        >
          <Icon icon={faGithub} />
        </a>

        <OriginalLink
          href="https://www.itsukaralink.jp"
          target="__blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
          <span>
            {t('banner.open_original', { defaultValue: 'Open Original' })}
          </span>
        </OriginalLink>
      </Toolbox>
    </Wrapper>
  );
});
