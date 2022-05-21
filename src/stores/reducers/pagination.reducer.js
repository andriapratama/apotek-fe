import { createSlice } from "@reduxjs/toolkit";

export const PaginationSlice = createSlice({
	name: "pagination",
	initialState: {
		page: 1,
	},
	reducers: {
		setPageRedux: (state, action) => {
			state.page = action.payload;
		},
		nextPageRedux: (state) => {
			state.page = state.page + 1;
		},
		prevPageRedux: (state) => {
			state.page = state.page - 1;
		},
	},
});

export const { setPageRedux, nextPageRedux, prevPageRedux } =
	PaginationSlice.actions;

export default PaginationSlice.reducer;
