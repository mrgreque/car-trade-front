import styled from "styled-components";

const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #5cabd8;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: 20px;
  background-color: #152d44;
  padding: 20px;
`;

const StyledFooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`

const StyledFooterUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  list-style: none;
`

const StyledFooterA = styled.a`
  text-decoration: none;
  color: #5cabd8;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`

export {
  FooterText,
  StyledFooter,
  StyledFooterNav,
  StyledFooterUl,
  StyledFooterA
};

