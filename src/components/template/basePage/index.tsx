import { Spacer } from "../../global/styled";
import { Outlet } from "react-router-dom";
import Header from "../../organism/header";
import Footer from "../../organism/footer";

const BasePageTemplate = () => {

  return (
    <div>
      <Header />
      <Spacer height="80px" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BasePageTemplate;
