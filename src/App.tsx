import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MainLoader from "./components/MainLoader/MainLoader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


const App: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<MainLoader/>}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

