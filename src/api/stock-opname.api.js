import instance from "../config/axios/axios.config";

export const storeStockOpnameDataApi = (transactionList, operator, note) => {
	return instance.post("/stock-opname", { operator, note, transactionList });
};

export const findAllStockOpnameDataApi = (page) => {
	return instance.get(`/stock-opname?page=${page}`);
};

export const findOnestockOpnameDataApi = (id) => {
	return instance.get(`/stock-opname/${id}`);
};
