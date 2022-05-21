import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllGroupDataApi,
	findGroupDataByNameApi,
	updateGroupDataApi,
	storeGroupDataApi,
} from "../../../api/group.api";
import { validation } from "./group.validation";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useGroupHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [groupList, setGroupList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [groupValue, setGroupValue] = useState({
		groupId: "",
		name: "",
	});

	//Store Group Data Start
	const storeData = async (value) => {
		try {
			await storeGroupDataApi(value.name);

			formikStore.resetForm();
			showAllGroupData();
		} catch (error) {
			setErrorsMessage(error.response.data.message);
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
	//Store Group Data End

	//Show All Group Data Start
	const showAllGroupData = async () => {
		const group = await findAllGroupDataApi(page);

		setGroupList(group.data.data.group.rows);
		setTotalPage(group.data.data.pagination.totalPage);
	};
	//Show All Group Data End

	useEffect(() => {
		showAllGroupData();
		// eslint-disable-next-line
	}, []);

	//Edit Group Data Start
	const handleEdit = (group) => {
		setIsShowUpdate(true);
		setGroupValue({
			groupId: group.group_id,
			name: group.name,
		});
	};

	const updateGroupData = async (values) => {
		try {
			await updateGroupDataApi(groupValue.groupId, values.name);

			showAllGroupData();
			setIsShowUpdate(false);
			setGroupValue({
				groupId: "",
				name: "",
			});
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: groupValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateGroupData(values);
		},
	});
	//Edit Group Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const group = await findAllGroupDataApi(i);

		setGroupList(group.data.data.group.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const group = await findAllGroupDataApi(page + 1);

		setGroupList(group.data.data.group.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const group = await findAllGroupDataApi(page - 1);

		setGroupList(group.data.data.group.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchGroup = async (search) => {
		if (search === "") {
			showAllGroupData();
		} else {
			const group = await findGroupDataByNameApi(search);

			setGroupList(group.data.data.group);
		}
	};
	//Feature Search End

	return {
		groupList,
		groupValue,
		setGroupValue,
		showAllGroupData,
		isDangerAlert,
		setIsDangerAlert,
		isShowUpdate,
		setIsShowUpdate,
		handleEdit,
		errorsMessage,
		setErrorsMessage,
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
		page,
		handleSearchGroup,
	};
};
