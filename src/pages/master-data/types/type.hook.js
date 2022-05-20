import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllTypeDataApi,
	findTypeDataByNameApi,
	updateTypeDataApi,
	storeTypeDataApi,
} from "../../../api/type.api";
import { validation } from "./type.validation";
import { useDispatch } from "react-redux";
import {
	nextPage,
	prevPage,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useTypeHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [typeList, setTypeList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [typeValue, setTypeValue] = useState({
		typeId: "",
		name: "",
	});

	//Store Type Data Start
	const storeData = async (value) => {
		try {
			await storeTypeDataApi(value.name);

			formikStore.resetForm();
			showAllTypeData();
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
	//Store Type Data End

	//Show All Type Data Start
	const showAllTypeData = async () => {
		const type = await findAllTypeDataApi(page);

		setTypeList(type.data.data.type.rows);
		setTotalPage(type.data.data.pagination.totalPage);
	};
	//Show All Type Data End

	useEffect(() => {
		showAllTypeData();
		// eslint-disable-next-line
	}, []);

	//Edit Type Data Start
	const handleEdit = (type) => {
		setIsShowUpdate(true);
		setTypeValue({
			typeId: type.type_id,
			name: type.name,
		});
	};

	const updateTypeData = async (values) => {
		try {
			await updateTypeDataApi(typeValue.typeId, values.name);

			showAllTypeData();
			setIsShowUpdate(false);
			setTypeValue({
				typeId: "",
				name: "",
			});
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: typeValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateTypeData(values);
		},
	});
	//Edit Type Data End

	//Pagination Start
	const handleNext = async () => {
		dispatch(nextPage());
		setPage(pageRedux + 1);
		const type = await findAllTypeDataApi(page + 1);

		setTypeList(type.data.data.type.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPage());
		setPage(pageRedux - 1);
		const type = await findAllTypeDataApi(page - 1);

		setTypeList(type.data.data.type.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchType = async (search) => {
		if (search === "") {
			showAllTypeData();
		} else {
			const type = await findTypeDataByNameApi(search);

			setTypeList(type.data.data.type);
		}
	};
	//Feature Search End

	return {
		typeList,
		typeValue,
		setTypeValue,
		showAllTypeData,
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
		page,
		handleSearchType,
	};
};
