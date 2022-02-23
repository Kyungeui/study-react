import React from "react";
import styled from "styled-components";
import { Route, NavLink, Routes } from "react-router-dom";

/** 각 예제별 컴포넌트 import */
import ReduxToolkitCounter from "./pages/ReduxToolkitCounter";
import ReduxToolkitDepartment from "./pages/ReduxToolkitDepartment";
import ReduxToolkitProfessor from "./pages/ReduxToolkitProfessor";
import ReduxToolkitStudent from "./pages/ReduxToolkitStudent";

/** 메뉴링크 --> 07-hook-event 예제의 App.js 파일의 내용과 동일 */
const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }

  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit</h1>

      <MenuLink to="/redux_toolkit_counter">ReduxToolkitCounter</MenuLink>
      <MenuLink to="/use_toolkit_department">ReduxToolkitDepartment</MenuLink>
      <MenuLink to="/use_toolkit_professor">ReduxToolkitProfessor</MenuLink>
      <MenuLink to="/use_toolkit_student">ReduxToolkitStudent</MenuLink>
      <hr />
      <Routes>
        <Route
          path="/redux_toolkit_counter"
          element={<ReduxToolkitCounter />}
        />
        <Route
          path="/use_toolkit_department"
          element={<ReduxToolkitDepartment />}
        />
        <Route
          path="/use_toolkit_professor"
          element={<ReduxToolkitProfessor />}
        />
        <Route
          path="/use_toolkit_student"
          element={<ReduxToolkitStudent />}
        />
      </Routes>
    </div>
  );
};

export default App;
