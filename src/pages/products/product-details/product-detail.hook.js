import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../../stores";
import {
	findOneProductDataByIdApi,
	findAllProductStockDataApi,
	findAllProductPriceDataApi,
} from "../../../api/product.api";
import {
	nextPagePriceRedux,
	prevPagePriceRedux,
	setPagePriceRedux,
} from "../../../stores/reducers/pagination.price.reducer";
import {
	nextPageStockRedux,
	prevPageStockRedux,
	setPageStockRedux,
} from "../../../stores/reducers/pagination.stock.reducer";

export const useProductDetailHook = () => {
	const dispatch = useDispatch();
	const productId = store.getState().productId.id;
	const pageStockRedux = store.getState().paginationStock.page;
	const pagePriceRedux = store.getState().paginationPrice.page;
	const [pageStock, setPageStock] = useState(pageStockRedux);
	const [pagePrice, setPagePrice] = useState(pagePriceRedux);
	const [totalPageStock, setTotalPageStock] = useState(0);
	const [totalPagePrice, setTotalPagePrice] = useState(0);
	const [stockList, setStockList] = useState([]);
	const [priceList, setPriceList] = useState([]);
	const [productValue, setProductValue] = useState({
		name: "",
		category: "",
		unit: "",
		typeList: [],
		group: "",
		brand: "",
		supplierList: [],
		stock: 0,
		stockMin: 0,
		sellingPrice: 0,
		purchasePrice: 0,
		locationList: [],
	});

	//Show One Product Data Start
	const showOneProductData = async () => {
		const product = await findOneProductDataByIdApi(productId);
		const data = product.data.data.product;

		setProductValue({
			name: data.name,
			category: data.category.name,
			unit: data.unit.name,
			typeList: data.product_types,
			group: data.group.name,
			brand: data.brand.name,
			supplierList: data.product_suppliers,
			stock: data.stock,
			stockMin: data.stock_min,
			sellingPrice: data.selling_price,
			purchasePrice: data.purchase_price,
			locationList: data.product_locations,
			stockHistoryList: data.product_stocks,
			priceHistoryList: data.product_prices,
		});
	};

	useEffect(() => {
		showOneProductData();
		// eslint-disable-next-line
	}, []);
	//Show One Product Data End

	//Show All Stock History Start
	const showAllStockHistory = async () => {
		const stock = await findAllProductStockDataApi(productId, pageStock);

		setStockList(stock.data.data.stock.rows);
		setTotalPageStock(stock.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllStockHistory();
		// eslint-disable-next-line
	}, []);
	//Show All Stock History End

	//Pagination Stock History Start
	const handleSetPageStock = async (i) => {
		dispatch(setPageStockRedux(i));
		setPageStock(i);
		const stock = await findAllProductStockDataApi(i);

		setStockList(stock.data.data.stock.rows);
	};

	const handleNextStock = async () => {
		dispatch(nextPageStockRedux());
		setPageStock(pageStockRedux + 1);
		const stock = await findAllProductStockDataApi(pageStock + 1);

		setStockList(stock.data.data.stock.rows);
	};

	const handlePrevStock = async () => {
		dispatch(prevPageStockRedux());
		setPageStock(pageStockRedux - 1);
		const stock = await findAllProductStockDataApi(pageStock - 1);

		setStockList(stock.data.data.stock.rows);
	};
	//Pagination Stock History End

	//Show All Price History Start
	const showAllPriceHistory = async () => {
		const price = await findAllProductPriceDataApi(productId, pagePrice);

		setPriceList(price.data.data.price.rows);
		setTotalPagePrice(price.data.data.pagination.totalPage);
	};

	useEffect(() => {
		showAllPriceHistory();
		// eslint-disable-next-line
	}, []);
	//Show All Price History End

	//Pagination Price History Start
	const handleSetPagePrice = async (i) => {
		dispatch(setPagePriceRedux(i));
		setPagePrice(i);
		const price = await findAllProductPriceDataApi(i);

		setPriceList(price.data.data.price.rows);
	};

	const handleNextPrice = async () => {
		dispatch(nextPagePriceRedux());
		setPagePrice(pagePriceRedux + 1);
		const price = await findAllProductPriceDataApi(pagePrice + 1);

		setPriceList(price.data.data.price.rows);
	};

	const handlePrevPrice = async () => {
		dispatch(prevPagePriceRedux());
		setPagePrice(pagePriceRedux - 1);
		const price = await findAllProductPriceDataApi(pagePrice - 1);

		setPriceList(price.data.data.price.rows);
	};
	//Pagination Price History End

	return {
		productValue,
		pagePrice,
		pageStock,
		totalPageStock,
		totalPagePrice,
		stockList,
		priceList,
		handleSetPagePrice,
		handleNextPrice,
		handlePrevPrice,
		handleSetPageStock,
		handleNextStock,
		handlePrevStock,
	};
};
