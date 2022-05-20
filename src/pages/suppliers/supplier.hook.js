import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
	findAllSupplierDataApi,
	storeSupplierDataApi,
	updateSupplierDataApi,
	findSupplierDataByNameApi,
} from "../../api/supplier.api";
import { validation } from "./supplier.validation";
import { store } from "../../stores";
import { nextPage, prevPage } from "../../stores/reducers/pagination.reducer";

export const useSupplierHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [page, setPage] = useState(pageRedux);
	const [supplierList, setSupplierList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [isShowCreate, setIsShowCreate] = useState(false);
	const [isShowEdit, setIsShowEdit] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [errorsMessage, setErrorsMessage] = useState("");
	const [supplierValue, setSupplierValue] = useState({
		supplierId: "",
		name: "",
		phone: "",
		address: "",
	});

	//Store Supplier Data Start
	const storeSupplierData = async (values) => {
		try {
			await storeSupplierDataApi(values.name, values.phone, values.address);

			setIsShowCreate(false);
			showAllSupplierData();

			setTimeout(() => {
				formikStore.resetForm();
			}, 200);
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikStore = useFormik({
		initialValues: {
			name: "",
			phone: "",
			address: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeSupplierData(values);
		},
	});
	//Store Supplier Data End

	//Show All Supplier Data Start
	const showAllSupplierData = async () => {
		const supplier = await findAllSupplierDataApi(page);

		setSupplierList(supplier.data.data.supplier.rows);
		setTotalPage(supplier.data.data.pagination.totalPage);
	};
	//Show All Supplier Data End

	useEffect(() => {
		showAllSupplierData();
		// eslint-disable-next-line
	}, []);

	//Edit Supplier Data Start
	const handleEdit = (supplier) => {
		setIsShowEdit(true);
		setSupplierValue({
			supplierId: supplier.supplier_id,
			name: supplier.name,
			phone: supplier.phone,
			address: supplier.address,
		});
	};

	const udpateSupplierData = async (values) => {
		try {
			await updateSupplierDataApi(
				supplierValue.supplierId,
				values.name,
				values.phone,
				values.address
			);

			showAllSupplierData();
			setIsShowEdit(false);
		} catch (error) {
			setErrorsMessage(error.response.data.message);
		}
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: supplierValue.name,
			phone: supplierValue.phone,
			address: supplierValue.address,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			udpateSupplierData(values);
		},
	});
	//Edit Supplier Data End

	//Pagination Start
	const handleNext = async () => {
		dispatch(nextPage());
		setPage(pageRedux + 1);
		const supplier = await findAllSupplierDataApi(page + 1);

		setSupplierList(supplier.data.data.supplier.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPage());
		setPage(pageRedux - 1);
		const supplier = await findAllSupplierDataApi(page - 1);

		setSupplierList(supplier.data.data.supplier.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearch = async (search) => {
		if (search === "") {
			showAllSupplierData();
		} else {
			const supplier = await findSupplierDataByNameApi(search);

			setSupplierList(supplier.data.data.supplier);
		}
	};
	//Feature Search End

	return {
		isShowCreate,
		setIsShowCreate,
		formikStore,
		errorsMessage,
		setErrorsMessage,
		supplierList,
		setSupplierValue,
		handleEdit,
		formikUpdate,
		isShowEdit,
		setIsShowEdit,
		supplierValue,
		isDangerAlert,
		setIsDangerAlert,
		showAllSupplierData,
		handleNext,
		handlePrev,
		page,
		totalPage,
		handleSearch,
	};
};
