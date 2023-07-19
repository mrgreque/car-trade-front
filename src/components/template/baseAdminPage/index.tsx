import { Spacer } from "../../global/styled";
import { Outlet } from "react-router-dom";
import Header from "../../organism/header";
import Footer from "../../organism/footer";

const BaseAdminPageTemplate = () => {

  return (
    <div>
      <Header painelAdmin />
      <Spacer height="80px" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseAdminPageTemplate;
