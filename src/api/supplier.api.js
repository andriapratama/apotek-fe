import instance from "../config/axios/axios.config";

export const storeSupplierDataApi = (name, phone, address) => {
	return instance.post("/supplier", {
		name,
		phone,
		address,
	});
};

export const findAllSupplierDataApi = (page) => {
	return instance.get(`/supplier?page=${page}`);
};

export const findSupplierDataByNameApi = (search) => {
	return instance.get(`/supplier/find?search=${search}`);
};

export const updateSupplierDataApi = (supplierId, name, phone, address) => {
	return instance.patch(`/supplier`, {
		supplierId,
		name,
		phone,
		address,
	});
};

export const deleteSupplierDataApi = (id) => {
	return instance.delete(`/supplier/${id}`);
};
