import instance from "../config/axios/axios.config";

export const findTransactionIdApi = () => {
	return instance.get("/transaction/code");
};

export const storeTransactionDataApi = (
	transactionList,
	grandDiscount,
	grandTotalDiscount,
	payment
) => {
	return instance.post("/transaction", {
		transactionList,
		grandDiscount,
		grandTotalDiscount,
		payment,
	});
};
