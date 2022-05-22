import { createSlice } from "@reduxjs/toolkit";

export const ProductIdSlice = createSlice({
	name: "productId",
	initialState: {
		id: null,
	},
	reducers: {
		setProductIdRedux: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { setProductIdRedux } = ProductIdSlice.actions;

export default ProductIdSlice.reducer;
