import React from "react";

// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch함수만 골라서 참조
import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div className="App">
      {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
      {/* <Meta/> */}

      <h2>02-simple-spa</h2>
      <hr />

      {/* --- 링크 구성 부분 ---- */}
      <nav>
        {/* ------- 페이지로 링크 적용 ------- */}
        <Link to="/">[Home]</Link>
        <Link to="/about">[About(1)]</Link>
        <Link to="/main">[Main(SubRoute)]</Link>
        {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
        <Link to="/department_get?deptno=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?deptno=102&msg=world">[멀티미디어학과]</Link>
        {/* PATH 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
      </nav>

      
      {/* ------- 페이지로 링크 적용 ------- */}
      <Routes>
        {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        {/* 서브라우팅 사용 */}
        <Route path="/main/*" element={<Main/>} />
        {/* GET 파라미터 사용 */}
        <Route path="/department_get" element={<DepartmentGet/>} />
        {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route
          path="/department_path/:deptno/:msg"
          element={<DepartmentPath/>}
        />

        {/* path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응. 단 switch블록의 맨 마지막에 배치해야 함 */}
        <Route element={<Error404/>} />
      </Routes>
    </div>
  );
};

export default App;
