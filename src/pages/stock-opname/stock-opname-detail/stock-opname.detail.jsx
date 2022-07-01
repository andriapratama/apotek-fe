import moment from "moment";
import "moment/locale/id";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../../components/button";
import CardContent from "../../../components/cards/card.content";
import TitleSection from "../../../components/title-sections/title-section";
import { useStockOpnameDetailHook } from "./stock-opname.detail.hook";

function StockOpnameDetail() {
	const navigate = useNavigate();

	const { stockOpnameList, date, operator, note } = useStockOpnameDetailHook();

	return (
		<section className="w-full">
			<TitleSection>Stock Opaname Detail</TitleSection>

			<CardContent>
				<div className="mb-5 flex w-full justify-between">
					<div className="flex w-[48%] items-center justify-between">
						<p>Date</p>
						<div className="w-[88%] rounded-lg border border-slate-400 bg-slate-100 px-2 py-1">
							{moment(date).locale("id").format("L")}
						</div>
					</div>

					<div className="flex w-[48%] items-center justify-between">
						<p>Operator</p>
						<div className="w-[82%] rounded-lg border border-slate-400 bg-slate-100 px-2 py-1">
							{operator}
						</div>
					</div>
				</div>

				<div className="mb-5 w-full">
					<p>Note</p>
					{note ? (
						<div className="w-full rounded-lg border border-slate-400 bg-slate-100 px-2 py-1">
							{note}
						</div>
					) : null}
				</div>

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th className="pl-2 text-left">Name</th>
							<th>Stock</th>
							<th>Unit</th>
							<th>Real Stock</th>
							<th>Difference</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{stockOpnameList.map((data, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td className="pl-2 text-left">{data.product.name}</td>
									<td>{data.stock}</td>
									<td className="capitalize">{data.product.unit.name}</td>
									<td>{data.real_stock}</td>
									<td className="flex justify-center py-1">
										<p
											className={`w-[80px] rounded-xl py-1 ${
												data.difference === 0
													? "bg-slate-300"
													: data.difference < 0
													? "bg-red-300"
													: data.difference > 0
													? "bg-green-300"
													: "bg-none"
											}`}
										>
											{data.difference}
										</p>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<ButtonSecondary
					name="Back"
					type="button"
					onClick={() => navigate(-1)}
				/>
			</CardContent>
		</section>
	);
}

export default StockOpnameDetail;
