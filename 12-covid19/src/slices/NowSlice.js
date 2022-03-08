import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNowList = createAsyncThunk(
  "NOW/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get("http://itpaper.co.kr/demo/covid19/now.php");
      console.log(result.data);
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
});

// Slic 정의 (Action 함수 + Responser의 개념)
const nowSlice = createSlice({
  name: "now",

  initialState: {
    rt: 200,
    rtmsg: null,
    item: [],
    loading: false,
  },
  reducers: {},

  extraReducers: {
    /** Ajax요청 준비 */
    [getNowList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getNowList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getNowList.rejected]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return {
        ...state,
        rt: payload?.status ? payload.status : "500",
        rtmsg: payload?.statusText ? payload.statusText : "Server Error",
        item: payload?.data,
        loading: false,
      }
    }
  },
});

export default nowSlice.reducer;
