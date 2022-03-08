import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import qs from "qs";

import Meta from "./components/Meta";
import Top from "./components/Top";

import KoreaStatePage from "./pages/KoreaStatePage";
import SidoStatePage from "./pages/SidoStatePage";
import style from "./assets/scss/style.module.scss";

const App = () => {
  return (
    <div className={style.container}>
      <Meta />

      <Top />

      <Routes basename={"./demo/react-kakao-search"}>
        <Route path="/korea_state" element={<KoreaStatePage />} />
        <Route path="/sido_state" element={<SidoStatePage />} />
      </Routes>
    </div>
  );
};

export default App;
