import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { plus, minus } from "../slices/CounterSlice";

const ReduxToolkitCounter = () => {
  React.useEffect(() => console.clear(), []);

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { number, color } = useSelector((state) => state.counter);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ReduxToolkitCounter</h2>
      <h3 style={{ color: color }}>{number}</h3>
      <div>
        <button
          onClick={(e) => {
            dispatch(plus(5));
          }}
        >
          +5
        </button>
        <button
          onClick={(e) => {
            dispatch(minus(3));
          }}
        >
          -3
        </button>
      </div>
    </div>
  );
};

export default ReduxToolkitCounter;
