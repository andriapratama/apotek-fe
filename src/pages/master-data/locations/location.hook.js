import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllLocationDataApi,
	findLocationDataByNameApi,
	updateLocationDataApi,
	storeLocationDataApi,
} from "../../../api/location.api";
import { validation } from "./location.validation";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useLocationHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [locationList, setLocationList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [locationValue, setLocationValue] = useState({
		locationId: "",
		name: "",
	});

	//Store Location Data Start
	const storeData = async (value) => {
		try {
			await storeLocationDataApi(value.name);

			formikStore.resetForm();
			showAllLocationData();
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
	//Store Location Data End

	//Show All Location Data Start
	const showAllLocationData = async () => {
		const location = await findAllLocationDataApi(page);

		setLocationList(location.data.data.location.rows);
		setTotalPage(location.data.data.pagination.totalPage);
	};
	//Show All Location Data End

	useEffect(() => {
		showAllLocationData();
		// eslint-disable-next-line
	}, []);

	//Edit Location Data Start
	const handleEdit = (location) => {
		setIsShowUpdate(true);
		setLocationValue({
			locationId: location.location_id,
			name: location.name,
		});
	};

	const updateLocationData = async (values) => {
		try {
			await updateLocationDataApi(locationValue.locationId, values.name);

			showAllLocationData();
			setIsShowUpdate(false);
			setLocationValue({
				locationId: "",
				name: "",
			});
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: locationValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateLocationData(values);
		},
	});
	//Edit Location Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const location = await findAllLocationDataApi(i);

		setLocationList(location.data.data.location.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const location = await findAllLocationDataApi(page + 1);

		setLocationList(location.data.data.location.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const location = await findAllLocationDataApi(page - 1);

		setLocationList(location.data.data.location.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchLocation = async (search) => {
		if (search === "") {
			showAllLocationData();
		} else {
			const location = await findLocationDataByNameApi(search);

			setLocationList(location.data.data.location);
		}
	};
	//Feature Search End

	return {
		locationList,
		locationValue,
		setLocationValue,
		showAllLocationData,
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
		handleSearchLocation,
	};
};
