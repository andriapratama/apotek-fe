import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeStockOpnameDataApi } from "../../../api/stock-opname.api";

export const useStockOpnameNewHook = () => {
	const [transactionList, setTransactionList] = useState([]);
	const [isShowModalNew, setIsShowModalNew] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [errorMessageNote, setErrorMessageNote] = useState("");
	const [errorQuantity, setErrorQuantity] = useState(false);
	const [note, setNote] = useState("");
	const regex = /^[0-9\b]+$/;
	const operator = "Dewik";
	const [isWarningAlert, setIsWarningAlert] = useState(false);

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

		if (newTransaction[index].quantity < 1) {
			newTransaction[index].status = false;
		} else {
			newTransaction[index].status = true;
		}

		const difference =
			newTransaction[index].quantity - newTransaction[index].stock;

		if (Math.abs(difference) === newTransaction[index].stock) {
			newTransaction[index].difference = 0;
		} else {
			newTransaction[index].difference = difference;
		}

		setTransactionList(newTransaction);
	};

	const handleSetQuantity = (e, index) => {
		const quantity = parseInt(e.target.value || 0);

		let newTransaction = [...transactionList];

		if (quantity <= 0) {
			newTransaction[index].quantity = 0;
			newTransaction[index].status = false;
		} else {
			newTransaction[index].quantity = quantity;
			newTransaction[index].status = true;
		}

		const difference =
			newTransaction[index].quantity - newTransaction[index].stock;

		if (newTransaction[index].quantity <= 0) {
			newTransaction[index].difference = 0;
		} else {
			newTransaction[index].difference = difference;
		}

		setErrorQuantity(false);
		setTransactionList(newTransaction);
	};

	const handleIncreaseQuantity = (index) => {
		let newTransaction = [...transactionList];

		newTransaction[index].quantity = newTransaction[index].quantity + 1;
		newTransaction[index].status = true;

		const difference =
			newTransaction[index].quantity - newTransaction[index].stock;

		newTransaction[index].difference = difference;

		setErrorQuantity(false);
		setTransactionList(newTransaction);
	};

	const handleSave = async () => {
		const data = transactionList.map((el) => el.status);
		const status = data.indexOf(false);

		if (note === "") {
			setErrorMessageNote("Note is required");
		} else if (transactionList.length === 0) {
			setErrorMessage("Transaction is required");
		} else if (status >= 0) {
			setErrorQuantity(true);
		} else if (status === -1) {
			setIsWarningAlert(true);
			//
		}
	};

	const storeStockOpnameData = async () => {
		await storeStockOpnameDataApi(transactionList, operator, note);

		setTransactionList([]);
		setNote("");
		setTimeout(() => {
			navigate("/stock-opname/list");
		}, 1500);
	};

	return {
		transactionList,
		setTransactionList,
		isShowModalNew,
		setIsShowModalNew,
		errorMessage,
		setErrorMessage,
		errorMessageNote,
		setErrorMessageNote,
		operator,
		regex,
		handleDeleteRowTransaction,
		handleDecreaseQuantity,
		handleSetQuantity,
		handleIncreaseQuantity,
		note,
		setNote,
		errorQuantity,
		isWarningAlert,
		setIsWarningAlert,
		handleSave,
		storeStockOpnameData,
	};
};
