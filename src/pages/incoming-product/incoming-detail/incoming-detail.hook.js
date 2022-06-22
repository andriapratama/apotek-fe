import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findOnePurchasingDataByIdApi } from "../../../api/purchasing.api";

const useIncomingDetailHook = () => {
	const { id } = useParams();
	const [purchasingList, setPurchasingList] = useState([]);
	const [date, setDate] = useState("");
	const [operator, setOperator] = useState("");
	const [note, setNote] = useState("");

	const showOnePurchasingDataById = async () => {
		const purchasing = await findOnePurchasingDataByIdApi(id);

		setPurchasingList(purchasing.data.data.purchasingDetail);
		setDate(purchasing.data.data.purchasing.createdAt);
		setOperator(purchasing.data.data.purchasing.operator);
		setNote(purchasing.data.data.purchasing.note);
	};

	useEffect(() => {
		showOnePurchasingDataById();
		// eslint-disable-next-line
	}, []);

	return { purchasingList, date, operator, note };
};

export default useIncomingDetailHook;
