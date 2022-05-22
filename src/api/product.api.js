import instance from "../config/axios/axios.config";

export const storeProductDataApi = (
	name,
	category,
	group,
	unit,
	brand,
	stock,
	stockMin,
	type,
	location,
	supplier,
	purchasePrice,
	sellingPrice
) => {
	return instance.post("/product", {
		name,
		category,
		group,
		unit,
		brand,
		stock,
		stockMin,
		type,
		location,
		supplier,
		purchasePrice,
		sellingPrice,
	});
};

export const findAllProductDataApi = (page) => {
	return instance.get(`/product?page=${page}`);
};

export const findOneProductDataByIdApi = (id) => {
	return instance.get(`/product/${id}`);
};

export const findProductDataByNameApi = (search) => {
	return instance.get(`/product/find?search=${search}`);
};

export const findAllProductStockDataApi = (id, page) => {
	return instance.get(`/product/stock/${id}?page=${page}`);
};

export const findAllProductPriceDataApi = (id, page) => {
	return instance.get(`/product/price/${id}?page=${page}`);
};
