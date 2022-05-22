import { createSlice } from "@reduxjs/toolkit";

export const PaginationPriceSlice = createSlice({
	name: "paginationPrice",
	initialState: {
		page: 1,
	},
	reducers: {
		setPagePriceRedux: (state, action) => {
			state.page = action.payload;
		},
		nextPagePriceRedux: (state) => {
			state.page = state.page + 1;
		},
		prevPagePriceRedux: (state) => {
			state.page = state.page - 1;
		},
	},
});

export const { setPagePriceRedux, nextPagePriceRedux, prevPagePriceRedux } =
	PaginationPriceSlice.actions;

export default PaginationPriceSlice.reducer;
