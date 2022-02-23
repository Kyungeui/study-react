import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { getList } from "../slices/ProfessorSlice";

const ReduxToolkitProfessor = () => {
  React.useEffect(() => console.clear(), []);

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.professor);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (rt !== 200) {
    return (
      <div>
        <h2>
          {rt} {rtmsg}
        </h2> 
        <button
          onClick={(e) => {
            dispatch(getList());
          }}
        >
          getList
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>ReduxToolkitProfessor</h2>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>deptno</th>
          </tr>
        </thead>
        <tbody>
          {item.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={(e) => {
          dispatch(getList());
        }}
      >
        getList
      </button>
    </div>
  );
};

export default ReduxToolkitProfessor;
