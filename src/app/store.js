import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../features/plans/plansSlice";
export const store = configureStore({
    reducer: {
        plans: planReducer
    }
})
