import { findOneUnitDataById } from "../../api/unit.api";
import { ButtonSecondary, IconButtonAddMd } from "../button";
import { Pagination } from "../pagination";
import { useShowProductHook } from "./show-product.hook";

export const ShowProductList = ({
	transactionList,
	setTransactionList,
	isShowModalNew,
	setIsShowModalNew,
	setErrorMessage,
}) => {
	const {
		handleSearchProduct,
		productList,
		page,
		totalPage,
		handleSetPage,
		handleNext,
		handlePrev,
		search,
		setSearch,
	} = useShowProductHook(isShowModalNew);

	return (
		<div
			className={`fixed inset-0 z-[50] duration-300 ease-in-out ${
				isShowModalNew ? "visible" : "invisible"
			}`}
		>
			<div className="absolute inset-0 bg-black opacity-40"></div>
			<div
				className={`absolute flex w-full justify-center pt-[50px] duration-300 ease-in-out ${
					isShowModalNew ? "scale-100" : "scale-0"
				}`}
			>
				<div className="min-h-auto max-h-[87vh] w-[600px] overflow-auto rounded-lg border border-slate-200 bg-white shadow shadow-slate-600">
					<div className="mb-5 w-full border-b-2 border-slate-400 py-3 text-center text-xl tracking-wider">
						Pilih Product
					</div>

					<div className="mb-5 w-full px-5">
						<div className="mb-5 w-full">
							<input
								className="w-full rounded-md border border-slate-400 px-2 py-1 outline-none"
								type="text"
								placeholder="Search product"
								value={search}
								onChange={(e) => {
									handleSearchProduct(e.target.value);
									setSearch(e.target.value);
								}}
							/>
						</div>

						<table className="table">
							<thead>
								<tr className="border-b-2 border-slate-400">
									<th className="pl-2 text-left">Name</th>
									<th>Stock</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{productList.map((product, index) => {
									return (
										<tr className="border-b border-slate-400" key={index}>
											<td className="pl-2">{product.name}</td>
											<td className="text-center">{product.stock}</td>
											<td className="flex justify-center py-2">
												<div
													onClick={async () => {
														const index = transactionList.findIndex(
															(value) => value.productId === product.product_id
														);

														const unit = await findOneUnitDataById(
															product.unit_id
														);
														const unitName = unit.data.data.name;

														if (index === -1) {
															setTransactionList([
																...transactionList,
																{
																	productId: product.product_id,
																	name: product.name,
																	stock: product.stock,
																	unit: unitName,
																	quantity: 0,
																	difference: 0,
																	status: false,
																},
															]);
														}

														setIsShowModalNew(false);
														setSearch("");
														setErrorMessage("");
													}}
												>
													<IconButtonAddMd />
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>

						<div className="flex">
							<Pagination
								page={page}
								totalPage={totalPage}
								handleSetPage={handleSetPage}
								handleNext={handleNext}
								handlePrev={handlePrev}
							/>
						</div>
					</div>

					<div className="border-t border-slate-400 p-5">
						<div onClick={() => setIsShowModalNew(false)}>
							<ButtonSecondary name="Cancel" type="button" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
