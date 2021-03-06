import moment from "moment";
import "moment/locale/id";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../../components/button";
import CardContent from "../../../components/cards/card.content";
import TitleSection from "../../../components/title-sections/title-section";
import useIncomingDetailHook from "./incoming-detail.hook";

function IncomingProductDetail() {
	const navigate = useNavigate();
	const { purchasingList, date, operator, note } = useIncomingDetailHook();

	return (
		<section className="w-full">
			<TitleSection>Incoming Product Detail</TitleSection>

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
						<div className="w-full rounded-lg border border-slate-400 bg-slate-100 py-1 px-2">
							{note}
						</div>
					) : null}
				</div>

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th className="pl-2 text-left">Name</th>
							<th>Remaining Stock</th>
							<th>Unit</th>
							<th>Stock In</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{purchasingList.map((purchasing, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td className="py-1 pl-2 text-left">
										{purchasing.product.name}
									</td>
									<td>{purchasing.leftover_stock}</td>
									<td className="capitalize">{purchasing.product.unit.name}</td>
									<td>{purchasing.stock_in}</td>
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

export default IncomingProductDetail;
