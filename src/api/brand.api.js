import instance from "../config/axios/axios.config";

export const storeBrandDataApi = (name) => {
	return instance.post("/brand", {
		name,
	});
};

export const findAllBrandDataApi = (page) => {
	return instance.get(`/brand?page=${page}`);
};

export const findBrandDataByNameApi = (search) => {
	return instance.get(`/brand/find?search=${search}`);
};

export const updateBrandDataApi = (brandId, name) => {
	return instance.patch(`/brand`, {
		brandId,
		name,
	});
};

export const deleteBrandDataApi = (id) => {
	return instance.delete(`/brand/${id}`);
};
