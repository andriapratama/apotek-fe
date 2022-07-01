import { useDashboardHook } from "./dashboard.hook";
import useFormatterHook from "../../components/formatter.hook";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";
import CardTitle from "../../components/cards/card.titles";

function Dashboard() {
	const {
		totalTransactionToday,
		totalProductSoldToday,
		totalIncomeToday,
		listTotalAllProductSoldToday,
	} = useDashboardHook();

	const { formatterIDR } = useFormatterHook();
	return (
		<section className="w-full">
			<TitleSection>Dashboard</TitleSection>

			<CardContent>
				<div className="flex w-full justify-between text-slate-900">
					<div className="dashboard__content flex h-[100px] w-[350px] items-center justify-between rounded-lg border border-slate-400 bg-sky-400 p-3">
						<div className="block">
							<p>Total Transaction</p>
							<p className="text-3xl">{totalTransactionToday} Transaction</p>
						</div>
						<i className="fa-solid fa-receipt mr-2 text-4xl" />
					</div>
					<div className="dashboard__content flex h-[100px] w-[350px] items-center justify-between rounded-lg border border-slate-400 bg-red-400 p-3">
						<div className="block">
							<p>Total Product Sold</p>
							<p className="text-3xl">{totalProductSoldToday} Product</p>
						</div>
						<i className="fa-solid fa-capsules mr-2 text-4xl" />
					</div>
					<div className="dashboard__content flex h-[100px] w-[350px] items-center justify-between rounded-lg border border-slate-400 bg-green-400 p-3">
						<div className="block">
							<p>Total Income</p>
							<p className="text-3xl">{formatterIDR(totalIncomeToday)}</p>
						</div>
						<i className="fa-solid fa-dollar-sign mr-2 text-4xl" />
					</div>
				</div>
			</CardContent>

			<CardContent>
				<CardTitle>Product Sold Today</CardTitle>

				<div className="w-[50%]">
					{listTotalAllProductSoldToday.length > 0 ? (
						<table className="table">
							<thead>
								<tr className="tr-head">
									<th>No</th>
									<th className="pl-2 text-left">Name</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{listTotalAllProductSoldToday.map((value, index) => {
									return (
										<tr className="tr-body text-center" key={index}>
											<td className="py-1">{index + 1}</td>
											<td className="pl-2 text-left">{value.name}</td>
											<td>{value.total_quantity}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					) : (
						<div className="w-full text-slate-600">No Sales Today</div>
					)}
				</div>
			</CardContent>
		</section>
	);
}

export default Dashboard;
