import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storePurchasingDataApi } from "../../../api/purchasing.api";

export const useIncomingProductNewHook = () => {
	const [transactionList, setTransactionList] = useState([]);
	const [isShowModalNew, setIsShowModalNew] = useState(false);
	const regex = /^[0-9\b]+$/;
	const operator = "Dewik";
	const [note, setNote] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [errorMessageNote, setErrorMessageNote] = useState("");

	const navigate = useNavigate();

	const handleDeleteRowTransaction = (id) => {
		const newTransaction = transactionList.filter(
			({ productId }) => productId !== id
		);

		setTransactionList(newTransaction);
	};

	const handleDecreaseQuantity = (index) => {
		let newTransaction = [...transactionList];

		if (newTransaction[index].quantity <= 0) {
			newTransaction[index].quantity = 0;
		} else {
			newTransaction[index].quantity = newTransaction[index].quantity - 1;
		}

		setTransactionList(newTransaction);
	};

	const handleSetQuantity = (e, index) => {
		const quantity = parseInt(e.target.value || 0);

		let newTransaction = [...transactionList];

		if (quantity < 0) {
			newTransaction[index].quantity = 0;
		} else {
			newTransaction[index].quantity = quantity;
		}

		setTransactionList(newTransaction);
	};

	const handleIncreaseQuantity = (index) => {
		let newTransaction = [...transactionList];

		newTransaction[index].quantity = newTransaction[index].quantity + 1;

		setTransactionList(newTransaction);
	};

	const storePurchasingData = async (e) => {
		e.preventDefault();

		if (note === "") {
			setErrorMessageNote("Note is required");
		} else if (transactionList.length === 0) {
			setErrorMessage("Transaction is required");
		} else {
			await storePurchasingDataApi(transactionList, operator, note);

			setTransactionList([]);
			setNote("");
			navigate("/incoming-product/list");
		}
	};

	return {
		transactionList,
		setTransactionList,
		isShowModalNew,
		setIsShowModalNew,
		handleDeleteRowTransaction,
		handleDecreaseQuantity,
		handleSetQuantity,
		handleIncreaseQuantity,
		regex,
		storePurchasingData,
		setNote,
		note,
		errorMessage,
		setErrorMessage,
		errorMessageNote,
		setErrorMessageNote,
	};
};
