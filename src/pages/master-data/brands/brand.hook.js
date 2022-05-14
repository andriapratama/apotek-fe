import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllBrandDataApi,
	findBrandDataByNameApi,
	updateBrandDataApi,
	storeBrandDataApi,
} from "../../../api/brand.api";
import { validation } from "./brand.validation";
import { useDispatch } from "react-redux";
import {
	nextPage,
	prevPage,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useBrandHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [brandList, setBrandList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [brandValue, setBrandValue] = useState({
		brandId: "",
		name: "",
	});

	//Store Brand Data Start
	const storeData = async (value) => {
		try {
			await storeBrandDataApi(value.name);

			formikStore.resetForm();
			showAllBrandData();
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
	//Store Brand Data End

	//Show All Brand Data Start
	const showAllBrandData = async () => {
		const brand = await findAllBrandDataApi(page);

		setBrandList(brand.data.data.brand.rows);
		setTotalPage(brand.data.data.pagination.totalPage);
	};
	//Show All Brand Data End

	useEffect(() => {
		showAllBrandData();
		// eslint-disable-next-line
	}, []);

	//Edit Brand Data Start
	const handleEdit = (brand) => {
		setIsShowUpdate(true);
		setBrandValue({
			brandId: brand.brand_id,
			name: brand.name,
		});
	};

	const updateBrandData = async (values) => {
		try {
			await updateBrandDataApi(brandValue.brandId, values.name);

			showAllBrandData();
			setIsShowUpdate(false);
			setBrandValue({
				brandId: "",
				name: "",
			});
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: brandValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateBrandData(values);
		},
	});
	//Edit Brand Data End

	//Pagination Start
	const handleNext = async () => {
		dispatch(nextPage());
		setPage(pageRedux + 1);
		const brand = await findAllBrandDataApi(page + 1);

		setBrandList(brand.data.data.brand.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPage());
		setPage(pageRedux - 1);
		const brand = await findAllBrandDataApi(page - 1);

		setBrandList(brand.data.data.brand.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearch = async (search) => {
		if (search === "") {
			showAllBrandData();
		} else {
			const brand = await findBrandDataByNameApi(search);

			setBrandList(brand.data.data.brand);
		}
	};
	//Feature Search End

	return {
		brandList,
		brandValue,
		setBrandValue,
		showAllBrandData,
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
		handleSearch,
	};
};
