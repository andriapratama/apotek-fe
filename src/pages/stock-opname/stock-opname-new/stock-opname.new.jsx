import moment from "moment";
import "moment/locale/id";
import { useDispatch } from "react-redux";
import {
	IconButtonDecreaseMd,
	IconButtonDelete,
	IconButtonIncreaseMd,
} from "../../../components/button";
import { ShowProductList } from "../../../components/show-product/show-product.component";
import { setPageRedux } from "../../../stores/reducers/pagination.reducer";
import { useStockOpnameNewHook } from "./stock-opname.new.hook";
import { WarningAlert } from "../../../components/alerts/warning.alert";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";
import ErrorForm from "../../../components/errors/error.form";
import ErrorWithBg from "../../../components/errors/error.background";

function StockOpnameNew() {
	const {
		transactionList,
		setTransactionList,
		isShowModalNew,
		setIsShowModalNew,
		errorMessage,
		setErrorMessage,
		errorMessageNote,
		setErrorMessageNote,
		handleDeleteRowTransaction,
		handleDecreaseQuantity,
		handleSetQuantity,
		handleIncreaseQuantity,
		regex,
		note,
		setNote,
		errorQuantity,
		isWarningAlert,
		setIsWarningAlert,
		handleSave,
		storeStockOpnameData,
	} = useStockOpnameNewHook();

	const dispatch = useDispatch();

	return (
		<section className="w-full">
			<ShowProductList
				setTransactionList={setTransactionList}
				transactionList={transactionList}
				isShowModalNew={isShowModalNew}
				setIsShowModalNew={setIsShowModalNew}
				setErrorMessage={setErrorMessage}
			/>

			<WarningAlert
				isWarningAlert={isWarningAlert}
				setIsWarningAlert={setIsWarningAlert}
				storeData={storeStockOpnameData}
			/>

			<TitleSection>Set Stock</TitleSection>

			<CardContent>
				<div className="mb-5 flex w-full justify-between">
					<div className="flex w-[48%] items-center justify-between">
						<p>Date</p>
						<div className="w-[88%] rounded-lg border border-slate-400 bg-slate-100 px-2 py-1">
							{moment().locale("id").format("L")}
						</div>
					</div>

					<div className="flex w-[48%] items-center justify-between">
						<p>Operator</p>
						<div className="w-[82%] rounded-lg border border-slate-400 bg-slate-100 px-2 py-1">
							Dewik
						</div>
					</div>
				</div>

				<div className="mb-5 w-full">
					<p>Note</p>
					<textarea
						className="h-[40px] w-full resize-none rounded-lg border border-slate-400 p-2"
						value={note}
						onChange={(e) => {
							setNote(e.target.value);
							setErrorMessageNote("");
						}}
					></textarea>
					{errorMessageNote ? <ErrorForm>{errorMessageNote}</ErrorForm> : null}
				</div>

				{errorMessage ? <ErrorWithBg>{errorMessage}</ErrorWithBg> : null}

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th className="pl-2 text-left">Name</th>
							<th>Stock</th>
							<th>Unit</th>
							<th>Real Stock</th>
							<th>Difference</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{transactionList.map((value, index) => {
							return (
								<tr className="tr-body text-center" key={index}>
									<td className="pl-2 text-left">{value.name}</td>
									<td>{value.stock}</td>
									<td className="capitalize">{value.unit}</td>
									<td className="flex items-center justify-center">
										<div onClick={() => handleDecreaseQuantity(index)}>
											<IconButtonDecreaseMd />
										</div>
										<input
											className={`w-14 rounded-lg bg-slate-200 py-1 text-center outline-none ${
												value.status === false && errorQuantity
													? "border border-red-500"
													: "border-0"
											}`}
											type="text"
											value={value.quantity}
											onChange={(e) => {
												const quantity = e.target.value;
												if (quantity === "" || regex.test(quantity)) {
													handleSetQuantity(e, index);
												}
											}}
										/>
										<div onClick={() => handleIncreaseQuantity(index)}>
											<IconButtonIncreaseMd />
										</div>
									</td>
									<td>{value.difference}</td>
									<td className="flex justify-center py-1">
										<div
											onClick={() =>
												handleDeleteRowTransaction(value.productId)
											}
										>
											<IconButtonDelete />
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<div
					className="mb-2 w-full cursor-pointer rounded-lg bg-sky-500 py-1 text-center text-lg text-white hover:opacity-75"
					onClick={() => {
						setIsShowModalNew(true);
						dispatch(setPageRedux(1));
					}}
				>
					Add Product
				</div>

				<button
					className="w-full cursor-pointer rounded-lg bg-green-500 py-1 text-center text-lg text-white hover:opacity-75"
					type="button"
					onClick={() => {
						handleSave();
					}}
				>
					Save
				</button>
			</CardContent>
		</section>
	);
}

export default StockOpnameNew;
