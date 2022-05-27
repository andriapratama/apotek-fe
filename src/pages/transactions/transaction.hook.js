import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	nextPageRedux,
	setPageRedux,
	prevPageRedux,
} from "../../stores/reducers/pagination.reducer";
import { findAllTransactionDataApi } from "../../api/transaction.api";
import { store } from "../../stores";

const useTransactionHook = () => {
	const dispatch = useDispatch();
	const pageRedux = store.getState().pagination.page;
	const [page, setPage] = useState(pageRedux);
	const [transactionList, setTransactionList] = useState([]);
	const [totalPage, setTotalPage] = useState(0);

	//Show All Transaction Data Start
	const showAllTransactionData = async () => {
		const transaction = await findAllTransactionDataApi(page);

		setTransactionList(transaction.data.data.transaction.rows);
		setTotalPage(transaction.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllTransactionData();
		//eslint-disable-next-line
	}, []);
	//Show All Transaction Data End

	//Pagination Start
	const handleSetPage = async (i) => {
		dispatch(setPageRedux(i));
		setPage(i);
		const transaction = await findAllTransactionDataApi(i);

		setTransactionList(transaction.data.data.transaction.rows);
	};

	const handleNext = async () => {
		dispatch(nextPageRedux());
		setPage(pageRedux + 1);
		const transaction = await findAllTransactionDataApi(page + 1);

		setTransactionList(transaction.data.data.transaction.rows);
	};

	const handlePrev = async () => {
		dispatch(prevPageRedux());
		setPage(pageRedux - 1);
		const transaction = await findAllTransactionDataApi(page - 1);

		setTransactionList(transaction.data.data.transaction.rows);
	};
	//Pagination End

	return {
		transactionList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
	};
};

export default useTransactionHook;
