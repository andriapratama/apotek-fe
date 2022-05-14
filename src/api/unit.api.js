import instance from "../config/axios/axios.config";

export const storeUnitDataApi = (name) => {
	return instance.post("/unit", {
		name,
	});
};

export const findAllUnitDataApi = (page) => {
	return instance.get(`/unit?page=${page}`);
};

export const findUnitDataByNameApi = (search) => {
	return instance.get(`/unit/find?search=${search}`);
};

export const updateUnitDataApi = (unitId, name) => {
	return instance.patch(`/unit`, {
		unitId,
		name,
	});
};

export const deleteUnitDataApi = (id) => {
	return instance.delete(`/unit/${id}`);
};
