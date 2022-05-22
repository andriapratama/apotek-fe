import { createSlice } from "@reduxjs/toolkit";

export const PaginationStockSlice = createSlice({
	name: "paginationStock",
	initialState: {
		page: 1,
	},
	reducers: {
		setPageStockRedux: (state, action) => {
			state.page = action.payload;
		},
		nextPageStockRedux: (state) => {
			state.page = state.page + 1;
		},
		prevPageStockRedux: (state) => {
			state.page = state.page - 1;
		},
	},
});

export const { setPageStockRedux, nextPageStockRedux, prevPageStockRedux } =
	PaginationStockSlice.actions;

export default PaginationStockSlice.reducer;
