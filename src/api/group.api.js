import instance from "../config/axios/axios.config";

export const storeGroupDataApi = (name) => {
	return instance.post("/group", {
		name,
	});
};

export const findAllGroupDataApi = (page) => {
	return instance.get(`/group?page=${page}`);
};

export const findGroupDataByNameApi = (search) => {
	return instance.get(`/group/find?search=${search}`);
};

export const updateGroupDataApi = (groupId, name) => {
	return instance.patch(`/group`, {
		groupId,
		name,
	});
};

export const deleteGroupDataApi = (id) => {
	return instance.delete(`/group/${id}`);
};
