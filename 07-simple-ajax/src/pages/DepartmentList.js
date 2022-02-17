import React from "react";
import axios from "axios";

const DepartmentList = () => {
  /** 화면에 표시할 상태값 -> 초기값을 빈 배열로 정의 */
  const [department, setDepartment] = React.useState([]);

  /** 페이지가 열림과 동시에 동작하는 hook */
  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/department");
        //ajax 연동 결과를 통째로 상태변수에 적용.
        setDepartment(response.data);
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }
    })();
  }, []);

  return (
    <div>
      <h2>학과목록</h2>
      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? (
            department.map((item, index) => {
              return (
                <tr key={item.deptno}>
                  <td>{item.deptno}</td>
                  <td>{item.dname}</td>
                  <td>{item.loc}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" align="center">
                검색결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
