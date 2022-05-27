import { createSlice } from "@reduxjs/toolkit";

export const TransactionValueSlice = createSlice({
	name: "transactionValue",
	initialState: {
		transactionId: "",
		date: "",
		operator: "",
		detailList: [],
		total: 0,
		totalDiscount: 0,
		payment: 0,
		changePayment: 0,
	},
	reducers: {
		setTransactionValueRedux: (state, action) => {
			state.transactionId = action.payload.transactionId;
			state.date = action.payload.today;
			state.detailList = action.payload.transactionList;
			state.total = action.payload.grandTotal;
			state.totalDiscount = action.payload.grandTotalDiscount;
			state.payment = action.payload.payment;
			state.changePayment = action.payload.changePayment;
			state.operator = action.payload.operator;
		},
	},
});

export const { setTransactionValueRedux } = TransactionValueSlice.actions;

export default TransactionValueSlice.reducer;
