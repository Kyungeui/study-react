import React from "react";

import { Route, Routes } from "react-router-dom";

import Meta from "./components/Meta";
import Top from "./components/Top";


import BookPage from './pages/BookPage'

import style from './assets/scss/style.module.scss'

const App = () => {
  return (
    <div className={style.container}>
      <Meta/>

      <Top/>

      <Routes>
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </div>
  );
};

export default App;
