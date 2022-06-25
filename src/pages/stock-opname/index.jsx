import { useNavigate } from "react-router-dom";
import { ButtonPrimayLg, IconButtonDetail } from "../../components/button";
import { useStockOpnameHook } from "./stock-opname.hook";
import moment from "moment";
import "moment/locale/id";
import { Pagination } from "../../components/pagination";

function StockOpname() {
	const navigate = useNavigate();

	const {
		stockOpnameList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
	} = useStockOpnameHook();

	return (
		<section className="w-full">
			<div className="mb-5">
				<span className="text-2xl text-slate-600">Stock Opname List</span>
			</div>

			<div className="card p-5">
				<div className="mb-5">
					<ButtonPrimayLg
						name="Set Stock"
						type="button"
						onClick={() => navigate("/stock-opname/new")}
					/>
				</div>

				<table className="table">
					<thead>
						<tr className="border-b-2 border-slate-400">
							<th>Date</th>
							<th>Transaction Code</th>
							<th>Operator</th>
							<th>Note</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{stockOpnameList.map((value, index) => {
							return (
								<tr
									className="border-b border-slate-400 text-center"
									key={index}
								>
									<td>{moment(value.createdAt).locale("id").format("L")}</td>
									<td>{value.stock_opname_id}</td>
									<td>{value.operator}</td>
									<td>{value.note}</td>
									<td className="flex justify-center py-1">
										<div
											onClick={() =>
												navigate(
													`/stock-opname/detail/${value.stock_opname_id}`
												)
											}
										>
											<IconButtonDetail />
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
						handleNext={handleNext}
						handlePrev={handlePrev}
						handleSetPage={handleSetPage}
					/>
				</div>
			</div>
		</section>
	);
}

export default StockOpname;
