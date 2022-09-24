import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
      </>
  );
};

export default MainLayout;
