import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import FooterMenu from "./footer/FooterMenu";
import { login } from "../../store/user/userAction";

const Layout = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (token && !user?.success) {
      dispatch(login());
    }
  }, [user]);

  return (
    <div id="content">
      <Header />
      {children}
      <FooterMenu />
      <Footer />
    </div>
  );
};

export default Layout;
