import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import MainLoader from "../MainLoader/MainLoader";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Background/>
      <main>
        <Suspense fallback={<p><MainLoader/></p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
