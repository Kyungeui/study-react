import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookList = createAsyncThunk(
  "BOOK/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    if (payload) {
      try {
        const apiUrl = "https://dapi.kakao.com//v3/search/book";
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
const bookSlice = createSlice({
  name: "book",

  initialState: {
    rt: null,
    rtmsg: null,
    item: [],
    loading: false,
  },
  reducers: {},

  extraReducers: {
    /** Ajax요청 준비 */
    [getBookList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getBookList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getBookList.rejected]: (state, { payload }) => {
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

export default bookSlice.reducer;