import instance from "../config/axios/axios.config";

export const storeLocationDataApi = (name) => {
	return instance.post("/location", {
		name,
	});
};

export const findAllLocationDataApi = (page) => {
	return instance.get(`/location?page=${page}`);
};

export const findLocationDataByNameApi = (search) => {
	return instance.get(`/location/find?search=${search}`);
};

export const updateLocationDataApi = (locationId, name) => {
	return instance.patch(`/location`, {
		locationId,
		name,
	});
};

export const deleteLocationDataApi = (id) => {
	return instance.delete(`/location/${id}`);
};
