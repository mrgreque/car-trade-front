import { Spacer } from "../../global/styled";
import { FooterText } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "../../organism/header";

const BasePageTemplate = () => {

  return (
    <div>
      <Header />
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
