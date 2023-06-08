import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const dispatchDataTable :any = createAsyncThunk(
  'data/dispatchDataTable',
  async (dataTable, thunkAPI) => {
    console.log( "dataTable",dataTable);
    return dataTable;
    
  }
);
export const dispatchDataTableBuy :any = createAsyncThunk(
  'data/dispatchDataTableBuy',
  async (dataBuy, thunkAPI) => {
    console.log( "dataBuy", dataBuy);
    return dataBuy;
    
  }
);
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dataTable: {
      ma: '',
      price: 0,
      SanT: '',
      TCT: '',
      TranC:''
    },
     dataBuy: {
      ma: '',
      price: 0,
      SanT: '',
      TCT: '',
      TranC:''
    },
  }, 
  reducers: {
      setProductParams: (state, action) => {
            //console.log(state.productParams);
            console.log("action",action)
            //state.productParams = { ...state.productParams, ...action.payload };
        },
  },
  extraReducers: (builder) => {
    builder.addCase(dispatchDataTable.fulfilled, (state:any, action) => {
      state.dataTable = action.payload;
    });
     builder.addCase(dispatchDataTableBuy.fulfilled, (state:any, action) => {
      state.dataBuy = action.payload;
    });
  },
});

export const { } = dataSlice.actions;
export default dataSlice.reducer;
