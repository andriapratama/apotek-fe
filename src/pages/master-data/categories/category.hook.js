import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	findAllCategoryDataApi,
	findCategoryDataByNameApi,
	updateCategoryDataApi,
	storeCategoryDataApi,
} from "../../../api/category.api";
import { validation } from "./category.validation";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../stores/reducers/pagination.reducer";
import { store } from "../../../stores";

export const useCategoryHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [categoryList, setCategoryList] = useState([]);
	const [isShowUpdate, setIsShowUpdate] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(pageRedux);
	const [categoryValue, setCategoryValue] = useState({
		categoryId: "",
		name: "",
	});

	//Store Category Data Start
	const storeData = async (value) => {
		try {
			await storeCategoryDataApi(value.name);

			formikStore.resetForm();
			showAllCategoryData();
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
	//Store Category Data End

	//Show All Category Data Start
	const showAllCategoryData = async () => {
		const category = await findAllCategoryDataApi(page);

		setCategoryList(category.data.data.category.rows);
		setTotalPage(category.data.data.pagination.totalPage);
	};
	//Show All Category Data End

	useEffect(() => {
		showAllCategoryData();
		// eslint-disable-next-line
	}, []);

	//Edit Category Data Start
	const handleEdit = (category) => {
		setIsShowUpdate(true);
		setCategoryValue({
			categoryId: category.category_id,
			name: category.name,
		});
	};

	const updateCategoryData = async (values) => {
		try {
			await updateCategoryDataApi(categoryValue.categoryId, values.name);

			showAllCategoryData();
			setIsShowUpdate(false);
			setCategoryValue({
				categoryId: "",
				name: "",
			});
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: categoryValue.name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateCategoryData(values);
		},
	});
	//Edit Category Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const category = await findAllCategoryDataApi(i);

		setCategoryList(category.data.data.category.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const category = await findAllCategoryDataApi(page + 1);

		setCategoryList(category.data.data.category.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const category = await findAllCategoryDataApi(page - 1);

		setCategoryList(category.data.data.category.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchCategory = async (search) => {
		if (search === "") {
			showAllCategoryData();
		} else {
			const category = await findCategoryDataByNameApi(search);

			setCategoryList(category.data.data.category);
		}
	};
	//Feature Search End

	return {
		categoryList,
		categoryValue,
		setCategoryValue,
		showAllCategoryData,
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
		handleSearchCategory,
	};
};
