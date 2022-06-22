import instance from "../config/axios/axios.config";

export const storePurchasingDataApi = (transactionList, operator, note) => {
	return instance.post("/purchasing", { operator, note, transactionList });
};

export const findAllPurchasingDataApi = (page) => {
	return instance.get(`/purchasing?page=${page}`);
};

export const findOnePurchasingDataByIdApi = (id) => {
	return instance.get(`/purchasing/${id}`);
};
