import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
import { useProductHook } from "../product.hook";
import { useProductDetailHook } from "./product-detail.hook";
import { PaginationStock } from "../../../components/pagination";

function StockHistory() {
	const navigate = useNavigate();

	const { formatterStock } = useProductHook();

	const {
		stockList,
		pageStock,
		totalPageStock,
		handleSetPageStock,
		handleNextStock,
		handlePrevStock,
	} = useProductDetailHook();

	return (
		<div className="product-detail__stock mb-5 flex w-full justify-center">
			<div className="w-8/12 rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-400">
				<div className="p-10">
					<div className="mb-5 text-xl font-medium text-slate-600">
						Stock History
					</div>

					<table className="mb-5 w-full border-collapse text-center text-slate-700">
						<thead>
							<tr className="border-b-2 border-slate-400">
								<th>Date</th>
								<th>Stock</th>
								<th className="pl-4 text-left">Description</th>
							</tr>
						</thead>
						<tbody>
							{stockList.map((stock, index) => {
								return (
									<tr className="border-b border-slate-400" key={index}>
										<td className="py-1">
											{moment(stock.createdAt).locale("id").format("l")}
										</td>
										<td className="py-1">
											{stock.status === 0 ? (
												<div className="rounded-xl bg-slate-300 py-[2px]">
													{formatterStock(stock.stock)}
												</div>
											) : stock.status === 1 ? (
												<div className="rounded-xl bg-green-300 py-[2px]">
													+ {formatterStock(stock.stock)}
												</div>
											) : stock.status === 2 ? (
												<div className="rounded-xl bg-red-300 py-[2px]">
													- {formatterStock(stock.stock)}
												</div>
											) : (
												<div className="rounded-xl py-[2px]">-</div>
											)}
										</td>
										<td className="max-w-[350px] py-1 pl-4 text-left">
											{stock.status === 0 ? (
												<p>
													{stock.transaction_code ? (
														<span>
															{stock.description}, transaction code{" "}
															<span
																className="cursor-pointer font-semibold hover:text-sky-500"
																onClick={() => {
																	navigate(
																		`/product/product/${stock.transaction_code}`
																	);
																}}
															>
																{stock.transaction_code}
															</span>
														</span>
													) : (
														<span>{stock.description}</span>
													)}
												</p>
											) : stock.status === 1 ? (
												<span>
													{stock.description}, transaction code{" "}
													<span
														className="cursor-pointer font-semibold hover:text-blue-500"
														onClick={() => {
															navigate(
																`/product/product/${stock.transaction_code}`
															);
														}}
													>
														{stock.transaction_code}
													</span>
												</span>
											) : stock.status === 2 ? (
												<span>
													{stock.description}, number transaction{" "}
													<span
														className="cursor-pointer font-semibold hover:text-blue-500"
														onClick={() => {
															navigate(
																`/transaction/detail/${stock.transaction_code}`
															);
														}}
													>
														{stock.transaction_code}
													</span>
												</span>
											) : (
												<div className="rounded-xl py-[2px] px-2">-</div>
											)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="flex">
						<PaginationStock
							page={pageStock}
							totalPage={totalPageStock}
							handleSetPage={handleSetPageStock}
							handleNext={handleNextStock}
							handlePrev={handlePrevStock}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StockHistory;
