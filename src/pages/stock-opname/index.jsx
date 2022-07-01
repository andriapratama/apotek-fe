import { useNavigate } from "react-router-dom";
import { ButtonPrimayLg, IconButtonDetail } from "../../components/button";
import { useStockOpnameHook } from "./stock-opname.hook";
import moment from "moment";
import "moment/locale/id";
import { Pagination } from "../../components/pagination";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";

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
			<TitleSection>Stock Opname List</TitleSection>

			<CardContent>
				<div className="mb-5">
					<ButtonPrimayLg
						name="Set Stock"
						type="button"
						onClick={() => navigate("/stock-opname/new")}
					/>
				</div>

				<table className="table">
					<thead>
						<tr className="tr-head">
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
								<tr className="tr-body text-center" key={index}>
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
			</CardContent>
		</section>
	);
}

export default StockOpname;
