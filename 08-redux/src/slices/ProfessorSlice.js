import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.

export const getList = createAsyncThunk("professor/getList", async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get("http://localhost:3001/professor");
    } catch (err) {
      // 에러 발생시 `rejectWithValue()`함수에 에러 데이터를 전달하면 extraReducer 의 rejected 함수가 호출된다.
      result = rejectWithValue(err.response);
    }
    return result;
  }
);
/** Slice 정의 (Action함수 + Reducer의 개념) */
export const professorSlice = createSlice({
  name: "professor",
  initialState: {
    rt: null,       // HTTP 상태 코드(200,404,500 등)
    rtmsg: null,    // 에러메시지
    item: [],       // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
  },

  // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax요청 준비 */
    [getList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      }
    }
  },
});
// 리듀서 객체 내보내기
export default professorSlice.reducer;
