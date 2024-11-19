import React from "react";
import MobileHome from "../layouts/MainLayout";
// import DesktopHome from "../layouts/Desktoplayout";
import HomePage from "../layouts/Desktoplayout";

const App: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return <>{isMobile ? <MobileHome /> : <HomePage />}</>;
};

export default App;
