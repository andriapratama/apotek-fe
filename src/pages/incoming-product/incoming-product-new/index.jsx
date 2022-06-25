import {
	IconButtonDecreaseMd,
	IconButtonDeleteMd,
	IconButtonIncreaseMd,
} from "../../../components/button";
import { ShowProductList } from "../../../components/show-product/show-product.component";
import { useIncomingProductNewHook } from "./incoming-product-new.hook";
import { useDispatch } from "react-redux";
import { setPageRedux } from "../../../stores/reducers/pagination.reducer";
import moment from "moment";
import "moment/locale/id";

function IncomingProductNew() {
	const {
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
	} = useIncomingProductNewHook();

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

			<div className="mb-5">
				<span className="text-2xl text-slate-600">Set Stock</span>
			</div>

			<form className="card p-5" onSubmit={(e) => storePurchasingData(e)}>
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
					{errorMessageNote ? (
						<div className="text-sm text-red-600">{errorMessageNote}</div>
					) : null}
				</div>

				{errorMessage ? (
					<div className="mb-5 w-full rounded-lg bg-red-200 py-2 text-center text-red-600">
						{errorMessage}
					</div>
				) : null}

				<table className="table">
					<thead>
						<tr className="border-b-2 border-slate-400">
							<th className="pl-2 text-left">Name</th>
							<th>Stock</th>
							<th>Unit</th>
							<th className="text-center">Quantity</th>
							<th className="text-center">Action</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{transactionList.map((value, index) => {
							return (
								<tr className="border-b border-slate-400" key={index}>
									<td className="pl-2 text-left">{value.name}</td>
									<td>{value.stock}</td>
									<td className="capitalize">{value.unit}</td>
									<td>
										<div className="flex items-center justify-center">
											<div onClick={() => handleDecreaseQuantity(index)}>
												<IconButtonDecreaseMd />
											</div>
											<input
												className="w-14 rounded-lg bg-slate-200 py-1 text-center outline-none"
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
										</div>
									</td>
									<td className="flex justify-center py-1">
										<div
											onClick={() => {
												handleDeleteRowTransaction(value.productId);
											}}
										>
											<IconButtonDeleteMd />
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
					type="submit"
				>
					Save
				</button>
			</form>
		</section>
	);
}

export default IncomingProductNew;
