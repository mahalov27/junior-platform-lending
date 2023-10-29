import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import MainLoader from "../MainLoader/MainLoader";
import toUpPage from "../ArrowToUp/toUpPage";
import ArrowToUp from "../ArrowToUp/ArrowToUp";

const Layout: React.FC = () => {
  const [widthVw, setWidth] = useState<number | null>(null)
  const location = useLocation();

  useEffect(() => {
    !widthVw && setWidth(window.innerWidth)
    toUpPage();
  }, [location, widthVw]);
  
  window.addEventListener('resize', () => setWidth(window.innerWidth))

  return (
    <>
      {widthVw && widthVw <= 744 && <ArrowToUp/>}
      <Header />
      <Background/>
      <main>
        <Suspense fallback={<MainLoader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
