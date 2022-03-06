import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "../slices/BookSlice";
import { Oval } from "react-loader-spinner";

import ListView from '../components/ListView';

import style from "../assets/scss/style.module.scss";

const BookPage = ({ query }) => {
  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.book);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBookList(query));
  }, [dispatch, query]);
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
        <ListView documents={item.documents} thumb={true} />
      )}
    </div>
  );
};

export default BookPage;
