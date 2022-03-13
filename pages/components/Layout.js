import Navbar from "./Navbar";
import Footer from "./Footer";
import Notify from "./Notify";
import Modal from "./Modal";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <Notify />
      <Modal />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
