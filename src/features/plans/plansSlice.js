import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => {
  const response = await fetch("https://www.api.dev.miobra.mx/plans/public/", { mode: 'cors' });
  const data = await response.json();
  return data;
});

export const planSlice = createSlice({
  name: "plans",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default planSlice.reducer;
