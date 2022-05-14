import instance from "../config/axios/axios.config";

export const storeCategoryDataApi = (name) => {
	return instance.post("/category", {
		name,
	});
};

export const findAllCategoryDataApi = (page) => {
	return instance.get(`/category?page=${page}`);
};

export const findCategoryDataByNameApi = (search) => {
	return instance.get(`/category/find?search=${search}`);
};

export const updateCategoryDataApi = (categoryId, name) => {
	return instance.patch(`/category`, {
		categoryId,
		name,
	});
};

export const deleteCategoryDataApi = (id) => {
	return instance.delete(`/category/${id}`);
};
