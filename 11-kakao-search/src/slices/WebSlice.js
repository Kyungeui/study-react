import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 여러개의 SLICE가 사용도는 경우 함수가 저굥ㅇ되는 별칭이 다른 파일과 중복되지 않도록 '파일명/함수병칭'등으로 지정.
export const getWebList = createAsyncThunk(
  "WEB/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    if (payload) {
      try {
        const apiUrl = "https://dapi.kakao.com//v2/search/web";
        result = await axios.get(apiUrl, {
          params: { query: payload },
          headers: { Authorization: "KakaoAK 4c076871e63fbdebdc6367a4a3273e31" }
        });
      } catch (err) {
        result = rejectWithValue(err.response);
      }
    }

    return result;
  }
);

// Slic 정의 (Action 함수 + Responser의 개념)
const webSlice = createSlice({
  name: "web",

  initialState: {
    rt: null,
    rtmsg: null,
    item: [],
    loading: false,
  },
  reducers: {},

  extraReducers: {
    /** Ajax요청 준비 */
    [getWebList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getWebList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getWebList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
  },
});

export default webSlice.reducer;
