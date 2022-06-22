import { store } from "../../stores";
import { useEffect, useState } from "react";
import { findAllPurchasingDataApi } from "../../api/purchasing.api";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	setPageRedux,
	prevPageRedux,
} from "../../stores/reducers/pagination.reducer";

const useIncomingProductHook = () => {
	const pageRedux = store.getState().pagination.page;
	const [page, setPage] = useState(pageRedux);
	const [purchasingList, setPurchasingList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const dispatch = useDispatch();

	//Show All Purchasing Data Start
	const showAllPurchasingData = async () => {
		const purchasing = await findAllPurchasingDataApi(page);

		setPurchasingList(purchasing.data.data.purchasing.rows);
		setTotalPage(purchasing.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllPurchasingData();
		// eslint-disable-next-line
	}, []);
	//Show All Purchasing Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const purchasing = await findAllPurchasingDataApi(i);

		setPurchasingList(purchasing.data.data.purchasing.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const purchasing = await findAllPurchasingDataApi(page + 1);

		setPurchasingList(purchasing.data.data.purchasing.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const purchasing = await findAllPurchasingDataApi(page - 1);

		setPurchasingList(purchasing.data.data.purchasing.rows);
	};
	//Pagination End

	return {
		purchasingList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
	};
};

export default useIncomingProductHook;
