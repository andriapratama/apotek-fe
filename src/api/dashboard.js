import instance from "../config/axios/axios.config";

export const findTotalTransactionTodayApi = () => {
	return instance.get("/dashboard/total-transaction/today");
};

export const findTotalProductSoldTodayApi = () => {
	return instance.get("/dashboard/total-product-sold/today");
};

export const findTotalIncomeTodayApi = () => {
	return instance.get("/dashboard/total-income/today");
};

export const findTotalOfAllProductSoldTodayApi = () => {
	return instance.get("/dashboard/total-all-product-sold/today");
};
