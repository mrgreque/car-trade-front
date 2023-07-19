/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FooterText, StyledFooter, StyledFooterA, StyledFooterNav, StyledFooterUl } from "./styled";

const handleOpenNewTab = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
  e.preventDefault();
  window.open(url, '_blank');
};

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <StyledFooterUl>
          <li>
            <StyledFooterA
              onClick={(e) => handleOpenNewTab(e, 'https://github.com/mrgreque')}
            >
              Github
            </StyledFooterA>
          </li>
          <li>
            <StyledFooterA
              onClick={(e) => handleOpenNewTab(e, 'https://www.linkedin.com/in/gabriel-greque-09a75a145/')}
            >
              LinkedIn
            </StyledFooterA>
          </li>
          <li>
            <StyledFooterA
              onClick={(e) => handleOpenNewTab(e, 'https://github.com/mrgreque/car-trade-api')}
            >
              Back-end Project
            </StyledFooterA>
          </li>
        </StyledFooterUl>
      </StyledFooterNav>
      <FooterText>© Gabriel Greque | Full Stack Developer | 2023</FooterText>
    </StyledFooter>
  )
};

export default Footer;
