import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {

  const footerProps = {
    titleSite: 'TRAVELNET',
    description: 'Hecho con',
  };

  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer footerProps={footerProps} />
      </>
  );
};

export default MainLayout;
