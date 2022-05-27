import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findOneTransactionDataByIdApi } from "../../../api/transaction.api";

export const useTransactionDetailHook = () => {
	const { id } = useParams();
	const [transactionValue, setTransactionValue] = useState({
		date: "",
		transactionId: "",
		cashier: "",
		detailList: [],
		total: 0,
		discount: 0,
		totalDiscount: 0,
		grandTotal: 0,
		payment: 0,
		changePayment: 0,
	});

	//Show One Transaction Data Start
	const showOneTransactionData = async () => {
		const transaction = await findOneTransactionDataByIdApi(id);
		const trans = transaction.data.data.transaction;

		setTransactionValue({
			date: trans.createdAt,
			transactionId: trans.transaction_id,
			cashier: "Dewi",
			detailList: trans.transaction_details,
			total: trans.total,
			discount: trans.discount,
			totalDiscount: trans.total_discount,
			grandTotal: trans.grand_total,
			payment: trans.payment,
			changePayment: trans.change_payment,
		});
	};

	useEffect(() => {
		showOneTransactionData();
		// eslint-disable-next-line
	}, []);
	//Show One Transaction Data End

	return { transactionValue };
};
