import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getNowList } from "../slices/NowSlice";
import { Oval } from "react-loader-spinner";

import style from "../assets/scss/style.module.scss";

const SidoStatePage = () => {
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.now);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!loading) {
      dispatch(getNowList());
    }
  }, []);
  return (
    <div>
      {loading && (
        <Oval
          color="#ff6600"
          height={100}
          width={100}
          wrapperStyle={{
            positon: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: "-50px",
            marginTop: "-50px",
          }}
        />
      )}

      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <code>{JSON.stringify(item)}</code>
      )}
    </div>
  );
};

export default SidoStatePage;