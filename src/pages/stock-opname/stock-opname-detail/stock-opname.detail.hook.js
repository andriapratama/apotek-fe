import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findOnestockOpnameDataApi } from "../../../api/stock-opname.api";

export const useStockOpnameDetailHook = () => {
	const { id } = useParams();
	const [stockOpnameList, setStockOpnameList] = useState([]);
	const [date, setDate] = useState("");
	const [operator, setOperator] = useState("");
	const [note, setNote] = useState("");

	const showOneStockOpnameDataById = async () => {
		const so = await findOnestockOpnameDataApi(id);

		setStockOpnameList(so.data.data.stockOpnameDetail);
		setDate(so.data.data.stockOpname.createdAt);
		setOperator(so.data.data.stockOpname.operator);
		setNote(so.data.data.stockOpname.note);
	};

	useEffect(() => {
		showOneStockOpnameDataById();
		// eslint-disable-next-line
	}, []);

	return { stockOpnameList, date, operator, note };
};
