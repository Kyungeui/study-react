import React from "react";
import { Route, Routes } from "react-router-dom";
import Meta from "./components/Meta";
import NewsPage from "./pages/NewsPage";
import style from './assets/scss/style.module.scss'

const App = () => {
  return (
    <div className={style.container}>
      <Meta/>

      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:targetDt" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default App;

