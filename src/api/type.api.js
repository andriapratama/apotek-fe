import instance from "../config/axios/axios.config";

export const storeTypeDataApi = (name) => {
	return instance.post("/type", {
		name,
	});
};

export const findAllTypeDataApi = (page) => {
	return instance.get(`/type?page=${page}`);
};

export const findTypeDataByNameApi = (search) => {
	return instance.get(`/type/find?search=${search}`);
};

export const updateTypeDataApi = (typeId, name) => {
	return instance.patch(`/type`, {
		typeId,
		name,
	});
};

export const deleteTypeDataApi = (id) => {
	return instance.delete(`/type/${id}`);
};
