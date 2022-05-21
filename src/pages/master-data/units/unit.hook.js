import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllUnitDataApi,
	findUnitDataByNameApi,
	updateUnitDataApi,
	storeUnitDataApi,
} from "../../../api/unit.api";
import { validation } from "./unit.validation";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useUnitHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [unitList, setUnitList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [unitValue, setUnitValue] = useState({
		unitId: "",
		name: "",
	});

	//Store Unit Data Start
	const storeData = async (value) => {
		try {
			await storeUnitDataApi(value.name);

			formikStore.resetForm();
			showAllUnitData();
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
	//Store Unit Data End

	//Show All Unit Data Start
	const showAllUnitData = async () => {
		const unit = await findAllUnitDataApi(page);

		setUnitList(unit.data.data.unit.rows);
		setTotalPage(unit.data.data.pagination.totalPage);
	};
	//Show All Unit Data End

	useEffect(() => {
		showAllUnitData();
		// eslint-disable-next-line
	}, []);

	//Edit Unit Data Start
	const handleEdit = (unit) => {
		setIsShowUpdate(true);
		setUnitValue({
			unitId: unit.unit_id,
			name: unit.name,
		});
	};

	const updateUnitData = async (values) => {
		try {
			await updateUnitDataApi(unitValue.unitId, values.name);

			showAllUnitData();
			setIsShowUpdate(false);
			setUnitValue({
				unitId: "",
				name: "",
			});
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: unitValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateUnitData(values);
		},
	});
	//Edit Unit Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const unit = await findAllUnitDataApi(i);

		setUnitList(unit.data.data.unit.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const unit = await findAllUnitDataApi(page + 1);

		setUnitList(unit.data.data.unit.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const unit = await findAllUnitDataApi(page - 1);

		setUnitList(unit.data.data.unit.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchUnit = async (search) => {
		if (search === "") {
			showAllUnitData();
		} else {
			const unit = await findUnitDataByNameApi(search);

			setUnitList(unit.data.data.unit);
		}
	};
	//Feature Search End

	return {
		unitList,
		unitValue,
		setUnitValue,
		showAllUnitData,
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
		handleSearchUnit,
	};
};
