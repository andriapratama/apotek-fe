import instance from "../config/axios/axios.config";

export const storeRoleDataApi = (name) => {
	return instance.post("/role", {
		name,
	});
};

export const findAllRoleDataApi = (page) => {
	return instance.get(`/role?page=${page}`);
};

export const findRoleDataByNameApi = (search) => {
	return instance.get(`/role/find?search=${search}`);
};

export const updateRoleDataApi = (roleId, name) => {
	return instance.patch(`/role`, {
		roleId,
		name,
	});
};

export const deleteRoleDataApi = (id) => {
	return instance.delete(`/role/${id}`);
};
