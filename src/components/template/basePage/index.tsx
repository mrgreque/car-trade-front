import { Spacer } from "../../global/styled";
import { FooterText, Title } from "./styled";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const BasePageTemplate = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    window.pageYOffset > 0 ?
      setScrolled(true) : setScrolled(false);
  }

  return (
    <div>
      <header style={{
        height: '80px',
        marginBottom: '20px',
        backgroundColor: '#000',
        position: "fixed",
        top: 0,
        width: '100%',
        zIndex: 1,
        boxShadow: scrolled ? '0px 0px 10px 0px rgba(0,0,0,0.75)' : 'none',
      }}>
        <Title>My Little Car Shop</Title>
      </header>
      <Spacer height="80px" />
      <Outlet />
      <footer style={{
        height: '400px',
        marginTop: '20px',
        backgroundColor: '#000',
      }}>
        <FooterText>Footer</FooterText>
      </footer>
    </div>
  );
};

export default BasePageTemplate;
