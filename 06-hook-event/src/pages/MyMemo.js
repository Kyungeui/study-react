import React from "react";
import dayjs from "dayjs"; // for 날짜 처리

const MyMemo = () => {
  // 파라미터로 전달되는 단어의 길이를 반환하는 함수 --> 처리비용이 매우 큰 함수를 가정함
  React.useEffect(() => console.clear(), []);

  const day = dayjs();

  const getLength = (w) => {
    console.log(
      "getLength() 호출됨! :::: " + day.format("YY/MM/DD hh:mm:ss.ms")
    );
    return w.length;
  };

  // 처리할 단어들
  const words = ["City", "Eye", "Apple", "Apple", "Orange"];

  // 버튼이 눌러진 횟수
  const [myCount, setMyCount] = React.useState(0);
  // 배열의 탐색 위치
  const [myIndex, setMyIndex] = React.useState(0);
  // 출력할 글자
  const [myWord, setMyWord] = React.useState(words[myIndex]);

  /** 특정 값이 변경된 경우만 동작하는 기능을 가정. */
  // 1) 출력할 글자의 길이를 상태값으로 정의
  const [myLen, setMyLen] = React.useState(myWord.length);

  // 2) 미리 준비한 상태값이 변경될 수 있는 Effect Hook을 정의
  React.useEffect( () => {
      setMyLen(getLength(myWord));
  }, [myWord]);

  /** (1)+(2)에 대한 통합 기능 */
  // 두 번째 파라미터인 배열에 설정된 state값이 이전 상태와 다를 경우에만 콜백을 실행한다.
  // 콜백의 결과가 저장되는 myLen은 일반 상태값과 동일하게 사용할 수 있다.
//   const myLen = React.useMemo(() => {
//     return getLength(myWord);
//   }, [myWord]);

  return (
    <div>
      <h2>MyMemo</h2>
      <p>
        {myIndex}번째 단어 "{myWord}"의 길이: {myLen}
      </p>
      <button
        onClick={() => {
          const next = (myIndex + 1) % words.length;
          setMyIndex(next);
          setMyCount(myCount + 1);
          setMyWord(words[next]);
        }}
      >
        버튼 클릭({myCount})
      </button>
    </div>
  );
};

export default MyMemo;