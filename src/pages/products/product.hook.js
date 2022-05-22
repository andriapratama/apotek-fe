import { useState, useEffect } from "react";
import {
	findAllProductDataApi,
	findProductDataByNameApi,
} from "../../api/product.api";
import { store } from "../../stores";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../stores/reducers/pagination.reducer";

export const useProductHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [page, setPage] = useState(pageRedux);
	const [productList, setProductList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);

	//Show All Product Data Start
	const showAllProductData = async () => {
		const product = await findAllProductDataApi(page);

		setProductList(product.data.data.product.rows);
		setTotalPage(product.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllProductData();
		//eslint-disable-next-line
	}, []);
	//Show All Product Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const product = await findAllProductDataApi(i);

		setProductList(product.data.data.product.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const product = await findAllProductDataApi(page + 1);

		setProductList(product.data.data.product.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const product = await findAllProductDataApi(page - 1);

		setProductList(product.data.data.product.rows);
	};
	//Pagination End

	//Feature Search Start
	const handleSearchProduct = async (search) => {
		if (search === "") {
			showAllProductData();
		} else {
			const product = await findProductDataByNameApi(search);

			setProductList(product.data.data.product);
		}
	};
	//Feature Search End

	//Formatter Stock Start
	const formatterStock = (value) => {
		const reverse = value.toString().split("").reverse().join("");
		const modify = reverse.match(/\d{1,3}/g);
		const format = modify.join(".").split("").reverse().join("");

		return format;
	};
	//Formatter Stock End

	//Formatter IDR Start
	const formatterIDR = (value) => {
		const format = value.toString().split("").reverse().join("");
		const convert = format.match(/\d{1,3}/g);
		const IDR = "Rp " + convert.join(".").split("").reverse().join("");

		return IDR;
	};
	//Formatter IDR End

	return {
		productList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
		formatterStock,
		formatterIDR,
		handleSearchProduct,
	};
};
