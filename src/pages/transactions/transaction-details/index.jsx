import moment from "moment";
import { useTransactionDetailHook } from "./transaction-detail.hook";
import { useFormatterHook } from "../../../components/formatter.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";

function TransactionDetail() {
	const { transactionValue } = useTransactionDetailHook();

	const { formatterIDR } = useFormatterHook();

	const date = moment(transactionValue.date).locale("id").format("L");
	const time = moment(transactionValue.date).locale("id").format("LT");

	return (
		<section className="transaction-detail w-full">
			<TitleSection>Transaction Detail</TitleSection>

			<CardContent>
				<div className="cashier-head mb-5 border-b-2 border-sky-500 pb-5">
					<div className="mb-5 flex justify-between">
						<div className="flex w-[48%] items-center justify-between">
							<p className="text-slate-600">Date/Time</p>
							<div className="w-[80%] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2 text-slate-600">
								<span>
									{date} / {time}
								</span>
							</div>
						</div>

						<div className="flex w-[48%] items-center justify-between">
							<p className="text-slate-600">Cashier Name</p>
							<div className="w-[75%] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2 text-slate-600">
								{transactionValue.cashier}
							</div>
						</div>
					</div>
					<div className="flex w-[48%] items-center justify-between">
						<p className="text-slate-600">Transaction Code</p>
						<div className="w-[71%] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2 text-slate-600">
							{transactionValue.transactionId}
						</div>
					</div>
				</div>

				<table className="table">
					<thead className="text-left">
						<tr className="tr-head">
							<th className="pl-2">Code</th>
							<th>Name</th>
							<th>Qty</th>
							<th>Price</th>
							<th>Disc</th>
							<th>Total Disc</th>
							<th>Sub Total</th>
						</tr>
					</thead>
					<tbody className="text-left">
						{transactionValue.detailList.map((detail, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td className="py-2 pl-2">{detail.product_id}</td>
									<td className="py-2">{detail.name}</td>
									<td className="py-2">
										<span>
											{detail.quantity} {detail.product.unit.name}
										</span>
									</td>
									<td className="py-2">
										{formatterIDR(detail.product.selling_price)}
									</td>
									<td className="py-2">
										<span>{detail.discount}%</span>
									</td>
									<td className="py-2">
										{formatterIDR(detail.total_discount)}
									</td>
									<td className="py-2">{formatterIDR(detail.sub_total)}</td>
								</tr>
							);
						})}
					</tbody>
					<tbody>
						<tr>
							<td
								className="pr-10 pt-5 text-right text-lg font-bold"
								colSpan={6}
							>
								Total
							</td>
							<td className="pt-5 text-lg" colSpan={2}>
								{formatterIDR(transactionValue.total)}
							</td>
						</tr>
					</tbody>
				</table>
			</CardContent>

			<CardContent>
				<div className="text-slate-600">
					<div className="mb-5 text-lg tracking-wide">Payment</div>

					<div className="mb-2 flex items-center">
						<div className="w-[150px]">
							<p>Discount</p>
						</div>
						<div className="w-[300px] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2">
							<span>{transactionValue.discount}%</span>
						</div>
					</div>
					<div className="mb-2 flex items-center">
						<div className="w-[150px]">
							<p>Total discount</p>
						</div>
						<div className="w-[300px] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2">
							{formatterIDR(transactionValue.totalDiscount)}
						</div>
					</div>
					<div className="mb-2 flex items-center">
						<div className="w-[150px]">
							<p>Grand total</p>
						</div>
						<div className="w-[300px] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2">
							{formatterIDR(transactionValue.grandTotal)}
						</div>
					</div>
					<div className="mb-2 flex items-center">
						<div className="w-[150px]">
							<p>Payment</p>
						</div>
						<div className="w-[300px] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2">
							{formatterIDR(transactionValue.payment)}
						</div>
					</div>
					<div className="mb-2 flex items-center">
						<div className="w-[150px]">
							<p>Change Payment</p>
						</div>
						<div className="w-[300px] rounded-lg border border-slate-400 bg-slate-200 py-1 px-2">
							{formatterIDR(transactionValue.changePayment)}
						</div>
					</div>
				</div>
			</CardContent>
		</section>
	);
}

export default TransactionDetail;
