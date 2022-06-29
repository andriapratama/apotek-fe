import { useEffect, useState } from "react";
import {
	findTotalIncomeTodayApi,
	findTotalOfAllProductSoldTodayApi,
	findTotalProductSoldTodayApi,
	findTotalTransactionTodayApi,
} from "../../api/dashboard";

export const useDashboardHook = () => {
	const [totalTransactionToday, setTotalTransactionToday] = useState(0);
	const [totalProductSoldToday, setTotalProductSoldToday] = useState(0);
	const [totalIncomeToday, setTotalIncomeToday] = useState(0);
	const [listTotalAllProductSoldToday, setListTotalAllProductSoldToday] =
		useState([]);

	//Show Total Transaction Today Start
	const showTotalTransactionToday = async () => {
		const transaction = await findTotalTransactionTodayApi();

		setTotalTransactionToday(transaction.data.data);
	};
	//Show Total Transaction Today End

	//Show Total Product Sold Today Start
	const showTotalProductSoldToday = async () => {
		const product = await findTotalProductSoldTodayApi();

		setTotalProductSoldToday(product.data.data);
	};
	//Show Total Product Sold Today End

	//Show Total Income Start
	const showTotalIncomeToday = async () => {
		const income = await findTotalIncomeTodayApi();

		setTotalIncomeToday(income.data.data);
	};
	//Show Total Income End

	//Show Total Of All Product Sold Start
	const showTotalAllProductSoldToday = async () => {
		const product = await findTotalOfAllProductSoldTodayApi();

		setListTotalAllProductSoldToday(product.data.data);
	};
	//Show Total Of All Product Sold End

	useEffect(() => {
		showTotalTransactionToday();
		showTotalProductSoldToday();
		showTotalIncomeToday();
		showTotalAllProductSoldToday();
		// eslint-disable-next-line
	}, []);

	return {
		totalTransactionToday,
		totalProductSoldToday,
		totalIncomeToday,
		listTotalAllProductSoldToday,
	};
};
