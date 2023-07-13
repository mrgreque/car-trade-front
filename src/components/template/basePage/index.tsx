import { FooterText, Title } from "./styled";
import { Outlet } from "react-router-dom";

const BasePageTemplate = () => {
  return (
    <div>
      <header style={{
        height: '80px',
        marginBottom: '20px',
        backgroundColor: '#000',
      }}>
        <Title>My Little Car Shop</Title>
      </header>
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
