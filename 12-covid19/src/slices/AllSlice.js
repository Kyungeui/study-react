import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllList = createAsyncThunk(
  "ALL/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get("http://itpaper.co.kr/demo/covid19/all.php");
      console.log(result.data);
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

// Slic 정의 (Action 함수 + Responser의 개념)
const allSlice = createSlice({
  name: "all",

  initialState: {
    rt: 200,
    rtmsg: null,
    item: [],
    loading: false,
  },
  reducers: {},

  extraReducers: {
    /** Ajax요청 준비 */
    [getAllList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getAllList.fulfilled]: (state, { payload }) => {
      // 데이터 추출
      const { data } = payload;
      console.group("원본 데이터");
      console.log(data);
      console.groupEnd();

      /** 총신결과 중에서 각 컴포넌트에 전달할 값을 추려낸다. */

      // 1) 누적 확진자 현황
      const accState = { '기준시작': data.collection_datetime, '확진환자': 0, '격리해제': 0, '격리중': 0, '사망': 0};

      // 2) 일주일간의 확진자 현황
      const confirmState = { '날짜': [], '누적확진': [], '일일확진': []}

      // 3) 일주일간의 격리해제 현황
      const releaseState = { '날짜': [], '누적격리해제': [], '일일격리해제': []}

      const cityData = data.data;

      const cityNames = Object.getOwnPropertyNames(cityData);

      cityNames.forEach((v, p) => {
        const cityItem = cityData[v];

        const lastIndex = cityItem.confirmed_acc.length -1;

        accState.확진환자 += cityItem.confirmed_acc[lastIndex];
        accState.격리해제 += cityItem.released_acc[lastIndex];
        accState.격리중 += cityItem.active[lastIndex];
        accState.사망 += cityItem.death_acc[lastIndex];

        const weekIndex = cityItem.confirmed_acc.length -8;

        for (let i = weekIndex, j=0; i<cityItem.confirmed_acc.length; i++, j++) {
          if (confirmState.날짜.indexOf(cityItem.data[i]) === -1){
            
            confirmState.날짜.push(cityItem.data[i]);
            confirmState.누적확진.push(parseInt(cityItem.confirmed_acc[i]));
            confirmState.일일확진.push(parseInt(cityItem.confirmed[i]));
            confirmState.날짜.push(cityItem.data[i]);
            releaseState.누적격리해제.push(parseInt(cityItem.released_acc[i]));
            releaseState.일일격리해제.push(parseInt(cityItem.released[i]));
          } else {

          }
        }
      });

      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    /** Ajax 요청 실패 */
    [getAllList.rejected]: (state, { payload }) => {
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

export default allSlice.reducer;
