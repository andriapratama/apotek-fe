import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllRoleDataApi,
	findRoleDataByNameApi,
	updateRoleDataApi,
} from "../../../api/role.api";
import { validation } from "./role.validation";
import { storeRoleDataApi } from "../../../api/role.api";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useRoleHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [roleList, setRoleList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [roleValue, setRoleValue] = useState({
		roleId: "",
		name: "",
	});

	//Store Role Data Start
	const storeData = async (value) => {
		try {
			await storeRoleDataApi(value.name);

			formikStore.resetForm();
			showAllRoleData();
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	const formikStore = useFormik({
		initialValues: {
			name: "",
		},
		validationSchema: validation,
		onSubmit: (value) => {
			storeData(value);
		},
	});
	//Store Role Data End

	//Show All Role Data Start
	const showAllRoleData = async () => {
		const role = await findAllRoleDataApi(page);

		setRoleList(role.data.data.role.rows);
		setTotalPage(role.data.data.pagination.totalPage);
	};
	//Show All Role Data End

	useEffect(() => {
		showAllRoleData();
		// eslint-disable-next-line
	}, []);

	//Edit Role Data Start
	const handleEdit = (role) => {
		setIsShowUpdate(true);
		setRoleValue({
			roleId: role.role_id,
			name: role.name,
		});
	};

	const updateRoleData = async (values) => {
		try {
			await updateRoleDataApi(roleValue.roleId, values.name);

			showAllRoleData();
			setIsShowUpdate(false);
			setRoleValue({
				roleId: "",
				name: "",
			});
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: roleValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateRoleData(values);
		},
	});
	//Edit Role Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const role = await findAllRoleDataApi(i);

		setRoleList(role.data.data.role.rows);
	};
	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const role = await findAllRoleDataApi(page + 1);

		setRoleList(role.data.data.role.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const role = await findAllRoleDataApi(page - 1);

		setRoleList(role.data.data.role.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchRole = async (search) => {
		if (search === "") {
			showAllRoleData();
		} else {
			const role = await findRoleDataByNameApi(search);

			setRoleList(role.data.data.role);
		}
	};
	//Feature Search End

	return {
		roleList,
		roleValue,
		setRoleValue,
		showAllRoleData,
		isDangerAlert,
		setIsDangerAlert,
		isShowUpdate,
		setIsShowUpdate,
		handleEdit,
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
		page,
		handleSearchRole,
	};
};
