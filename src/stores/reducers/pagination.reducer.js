import { createSlice } from "@reduxjs/toolkit";

export const PaginationSlice = createSlice({
	name: "pagination",
	initialState: {
		page: 1,
	},
	reducers: {
		setPage: (state) => {
			state.page = 1;
		},
		nextPage: (state) => {
			state.page = state.page + 1;
		},
		prevPage: (state) => {
			state.page = state.page - 1;
		},
	},
});

export const { setPage, nextPage, prevPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;
