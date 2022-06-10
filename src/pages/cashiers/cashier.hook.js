import { useState, useEffect } from "react";
import { findProductDataByNameApi } from "../../api/product.api";
import { findTransactionIdApi } from "../../api/transaction.api";

export const useCashierHook = () => {
	const [isShowProductList, setIsShowProductList] = useState(false);
	const [productList, setProductList] = useState([]);
	const [transactionList, setTransactionList] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [isShowPayment, setIsShowPayment] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [transactionId, setTransactionId] = useState("");
	const [search, setSearch] = useState("");
	const [isShowAlert, setIsShowAlert] = useState(false);

	//Show Transaction ID Start
	const showTransactionId = async () => {
		const transaction = await findTransactionIdApi();

		setTransactionId(transaction.data.data);
	};

	useEffect(() => {
		showTransactionId();
		//eslint-disable-next-line
	}, []);
	//Show Transaction ID End

	//Show Product Data By Name Start
	const showProductDataByName = async (search) => {
		const product = await findProductDataByNameApi(search);

		setProductList(product.data.data.product);
	};
	//Show Product Data By Name End

	//Handle Decrease Quantity Start
	const handleDecreaseQuantity = (index) => {
		let newProduct = [...transactionList];

		if (newProduct[index].quantity <= 1) {
			newProduct[index].quantity = newProduct[index].quantity - 0;
		} else {
			newProduct[index].quantity = newProduct[index].quantity - 1;

			newProduct[index].total =
				newProduct[index].price * newProduct[index].quantity;

			newProduct[index].subTotal =
				newProduct[index].price * newProduct[index].quantity;

			newProduct[index].totalDiscount =
				(newProduct[index].subTotal * newProduct[index].discount) / 100;

			newProduct[index].total =
				newProduct[index].subTotal - newProduct[index].totalDiscount;

			if (newProduct[index].total <= 0) {
				newProduct[index].total = 0;
			}
		}

		setTransactionList(newProduct);
	};
	//Handle Decrease Quantity End

	//Handle Set Quantity Start
	const handleSetQuantity = (e, index) => {
		const number = parseInt(e.target.value || 0);
		let newProduct = [...transactionList];

		if (number < 1) {
			newProduct[index].quantity = 1;
		} else {
			newProduct[index].quantity = number;
		}

		newProduct[index].total =
			newProduct[index].price * newProduct[index].quantity;

		newProduct[index].subTotal =
			newProduct[index].price * newProduct[index].quantity;

		newProduct[index].totalDiscount =
			(newProduct[index].subTotal * newProduct[index].discount) / 100;

		newProduct[index].total =
			newProduct[index].subTotal - newProduct[index].totalDiscount;

		if (newProduct[index].total <= 0) {
			newProduct[index].total = 0;
		}

		setTransactionList(newProduct);
	};
	//Handle Set Quantity End

	//Handle Increase Quantity Start
	const handleIncreaseQuantity = (index) => {
		let newProduct = [...transactionList];

		newProduct[index].quantity = newProduct[index].quantity + 1;

		newProduct[index].total =
			newProduct[index].price * newProduct[index].quantity;

		newProduct[index].subTotal =
			newProduct[index].price * newProduct[index].quantity;

		newProduct[index].totalDiscount =
			(newProduct[index].subTotal * newProduct[index].discount) / 100;

		newProduct[index].total =
			newProduct[index].subTotal - newProduct[index].totalDiscount;

		if (newProduct[index].total <= 0) {
			newProduct[index].total = 0;
		}

		setTransactionList(newProduct);
	};
	//Handle Increase Quantity End

	//Handle Discount Subt Total Start
	const handleDiscountSubTotal = (e, index) => {
		const newDiscount = parseInt(e.target.value || 0);
		let newProduct = [...transactionList];

		if (newDiscount > 100) {
			newProduct[index].discount = 100;
		} else {
			newProduct[index].discount = newDiscount;
		}

		if (
			(newProduct[index].subTotal * newDiscount) / 100 >
			newProduct[index].subTotal
		) {
			newProduct[index].totalDiscount = newProduct[index].subTotal;
		} else {
			newProduct[index].totalDiscount =
				(newProduct[index].subTotal * newDiscount) / 100;
		}

		newProduct[index].total =
			newProduct[index].subTotal - newProduct[index].totalDiscount;

		if (newProduct[index].total <= 0) {
			newProduct[index].total = 0;
		}

		setTransactionList(newProduct);
	};
	//Handle Discount Subt Total End

	//Handle Total Discount Sub Total Start
	const handleTotalDiscountSubTotal = (e, index) => {
		const newTotalDiscount = parseInt(e.target.value || 0);
		let newProduct = [...transactionList];

		if (newTotalDiscount > newProduct[index].subTotal) {
			newProduct[index].totalDiscount = newProduct[index].subTotal;
		} else {
			newProduct[index].totalDiscount = newTotalDiscount;
		}

		newProduct[index].discount = 0;
		newProduct[index].total = newProduct[index].subTotal - newTotalDiscount;

		if (newProduct[index].total <= 0) {
			newProduct[index].total = 0;
		}

		setTransactionList(newProduct);
	};
	//Handle Total Discount Sub Total End

	//Sum And Show Total Transaction List Start
	useEffect(() => {
		const sumTotal = transactionList.reduce(
			(prev, curr) => prev + curr.total,
			0
		);

		setTotalPrice(sumTotal);
	}, [transactionList, setTotalPrice]);
	//Sum And Show Total Transaction List End

	//Handle Delete Row Transaction Start
	const handleDeleteRowTransaction = (id) => {
		const newTransaction = transactionList.filter(
			({ productId }) => productId !== id
		);
		setTransactionList(newTransaction);
	};
	//Handle Delete Row Transaction End

	//Handle Payment Start
	const handlePayment = () => {
		if (transactionList.length === 0) {
			setErrorMessage("Transaction is required");
		} else {
			setIsShowPayment(true);
		}
	};
	//Handle Payment End

	return {
		isShowProductList,
		setIsShowProductList,
		productList,
		setProductList,
		transactionList,
		setTransactionList,
		showProductDataByName,
		handleDecreaseQuantity,
		handleSetQuantity,
		handleIncreaseQuantity,
		handleDiscountSubTotal,
		handleTotalDiscountSubTotal,
		totalPrice,
		handleDeleteRowTransaction,
		isShowPayment,
		setIsShowPayment,
		handlePayment,
		errorMessage,
		setErrorMessage,
		transactionId,
		search,
		setSearch,
		showTransactionId,
		isShowAlert,
		setIsShowAlert,
	};
};
