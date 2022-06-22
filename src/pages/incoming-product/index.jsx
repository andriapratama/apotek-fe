import { useNavigate } from "react-router-dom";
import { ButtonPrimayLg, IconButtonDetail } from "../../components/button";
import useIncomingProductHook from "./incoming-product.hook";
import moment from "moment";
import "moment/locale/id";
import { Pagination } from "../../components/pagination";

function IncomingProductList() {
	const navigate = useNavigate();

	const {
		page,
		totalPage,
		purchasingList,
		handleNext,
		handlePrev,
		handleSetPage,
	} = useIncomingProductHook();

	return (
		<section className="w-full">
			<div className="mb-5">
				<span className="text-2xl text-slate-600">
					Incoming Product History
				</span>
			</div>

			<div className="card">
				<div className="p-5">
					<div className="mb-5">
						<ButtonPrimayLg
							name="Set Stock"
							type="button"
							onClick={() => navigate("/incoming-product/new")}
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
							{purchasingList.map((purchasing, index) => {
								return (
									<tr
										className="border-b border-slate-400 text-center"
										key={index}
									>
										<td>
											{moment(purchasing.createdAt).locale("id").format("L")}
										</td>
										<td>{purchasing.purchasing_id}</td>
										<td>{purchasing.operator}</td>
										<td>{purchasing.note}</td>
										<td className="flex justify-center py-1">
											<div
												onClick={() => {
													navigate(
														`/incoming-product/detail/${purchasing.purchasing_id}`
													);
												}}
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
			</div>
		</section>
	);
}

export default IncomingProductList;
