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

export const findAllTransactionDataApi = (page) => {
	return instance.get(`/transaction?page=${page}`);
};

export const findOneTransactionDataByIdApi = (id) => {
	return instance.get(`/transaction/${id}`);
};
