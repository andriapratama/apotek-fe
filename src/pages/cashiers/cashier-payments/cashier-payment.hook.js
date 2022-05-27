import { useState, useEffect } from "react";
import { storeTransactionDataApi } from "../../../api/transaction.api";
import { useDispatch } from "react-redux";
import { setTransactionValueRedux } from "../../../stores/reducers/transaction-value.reducer";
import moment from "moment";
import "moment/locale/id";

export const useCashierPaymentHook = (
	totalPrice,
	transactionList,
	setTransactionList,
	setSearch,
	setIsShowPayment,
	showTransactionId,
	setIsShowAlert,
	setProductList,
	transactionId
) => {
	const dispatch = useDispatch();
	const [payment, setPayment] = useState(0);
	const [grandTotal, setGrandTotal] = useState(totalPrice);
	const [changePayment, setChangePayment] = useState(0);
	const [grandDiscount, setGrandDiscount] = useState(0);
	const [grandTotalDiscount, setGrandTotalDiscount] = useState(0);
	const regex = /^[0-9\b]+$/;
	const [errorPayment, setErrorPayment] = useState("");
	const today = moment().locale("id");
	const operator = "Dewi";

	//Store Transaction and Transaction Detail Start
	const storeTransactionData = async (e) => {
		e.preventDefault();
		if (payment <= 0) {
			setErrorPayment("Payment is required");
		} else if (payment - grandTotal < 0) {
			setErrorPayment("Payment is not enough");
		} else {
			await storeTransactionDataApi(
				transactionList,
				grandDiscount,
				grandTotalDiscount,
				payment
			);

			dispatch(
				setTransactionValueRedux({
					transactionId,
					transactionList,
					today,
					grandTotalDiscount,
					grandTotal,
					payment,
					changePayment,
					operator,
				})
			);

			setTimeout(() => {
				setTransactionList([]);
				setIsShowPayment(false);
				setChangePayment(0);
				setGrandDiscount(0);
				setPayment(0);
				setGrandTotal(totalPrice);
				setGrandTotalDiscount(0);
				showTransactionId();
				setSearch("");
				setIsShowAlert(true);
				setProductList([]);
			}, 500);
		}
	};
	//Store Transaction and Transaction Detail End

	useEffect(() => {
		if (totalPrice - grandTotalDiscount <= 0) {
			setGrandTotal(0);
		} else {
			setGrandTotal(totalPrice - grandTotalDiscount);
		}

		if (payment <= 0) {
			setChangePayment(0);
		} else {
			if (payment - grandTotal <= 0) {
				setChangePayment(0);
			} else {
				setChangePayment(payment - grandTotal);
			}
		}
	}, [
		totalPrice,
		grandTotal,
		payment,
		grandTotalDiscount,
		setGrandTotal,
		setChangePayment,
	]);

	return {
		storeTransactionData,
		regex,
		setErrorPayment,
		errorPayment,
		payment,
		setPayment,
		grandTotal,
		setGrandTotal,
		grandDiscount,
		setGrandDiscount,
		grandTotalDiscount,
		setGrandTotalDiscount,
		changePayment,
		setChangePayment,
	};
};
