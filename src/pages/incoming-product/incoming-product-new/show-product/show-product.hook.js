import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	findAllProductDataApi,
	findProductDataByNameApi,
} from "../../../../api/product.api";
import { store } from "../../../../stores";
import {
	nextPageRedux,
	prevPageRedux,
	setPageRedux,
} from "../../../../stores/reducers/pagination.reducer";

export const useShowProductHook = (isShowModalNew) => {
	const pageRedux = store.getState().pagination.page;
	const dispatch = useDispatch();
	const [page, setPage] = useState(pageRedux);
	const [productList, setProductList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [search, setSearch] = useState("");

	const showAllProductData = async (page) => {
		const product = await findAllProductDataApi(page);

		setProductList(product.data.data.product.rows);
		setTotalPage(product.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllProductData(pageRedux);
	}, [pageRedux, isShowModalNew]);

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const product = await findAllProductDataApi(i);

		setProductList(product.data.data.product.rows);
		setSearch("");
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const product = await findAllProductDataApi(page + 1);

		setProductList(product.data.data.product.rows);
		setSearch("");
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const product = await findAllProductDataApi(page - 1);

		setProductList(product.data.data.product.rows);
		setSearch("");
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

	return {
		handleSearchProduct,
		productList,
		page,
		totalPage,
		handleSetPage,
		handleNext,
		handlePrev,
		search,
		setSearch,
	};
};
