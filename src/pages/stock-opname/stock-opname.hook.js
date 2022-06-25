import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findAllStockOpnameDataApi } from "../../api/stock-opname.api";
import { store } from "../../stores";
import {
	nextPageRedux,
	setPageRedux,
	prevPageRedux,
} from "../../stores/reducers/pagination.reducer";

export const useStockOpnameHook = () => {
	const pageRedux = store.getState().pagination.page;
	const [page, setPage] = useState(pageRedux);
	const [stockOpnameList, setStockOpnameList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const dispatch = useDispatch();

	//Show All Stock Opname Data Start
	const showAllStockOpnameData = async () => {
		const stockOpname = await findAllStockOpnameDataApi(page);

		setStockOpnameList(stockOpname.data.data.stockOpname.rows);
		setTotalPage(stockOpname.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllStockOpnameData();
		// eslint-disable-next-line
	}, []);
	//Show All Stock Opname Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const stockOpname = await findAllStockOpnameDataApi(i);

		setStockOpnameList(stockOpname.data.data.stockOpname.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const stockOpname = await findAllStockOpnameDataApi(page + 1);

		setStockOpnameList(stockOpname.data.data.stockOpname.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const stockOpname = await findAllStockOpnameDataApi(page - 1);

		setStockOpnameList(stockOpname.data.data.stockOpname.rows);
	};
	//Pagination End

	return {
		stockOpnameList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
	};
};
