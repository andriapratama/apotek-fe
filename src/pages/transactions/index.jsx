import moment from "moment";
import "moment/locale/id";
import { useNavigate } from "react-router-dom";
import { IconButtonDetail } from "../../components/button";
import { Pagination } from "../../components/pagination";
import { SearchFeature } from "../../components/search";
import useTransactionHook from "./transaction.hook";
import useFormatterHook from "../../components/formatter.hook";

function TransactionList() {
	const naviagte = useNavigate();

	const {
		transactionList,
		page,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
	} = useTransactionHook();

	const { formatterIDR } = useFormatterHook();

	return (
		<section className="transaction-list min-h-[80vh] w-full">
			<div className="transaction-list__head mb-5">
				<span className="text-2xl text-slate-600">Transaction List</span>
			</div>

			<div className="transaction-list__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-400">
				<div className="p-5">
					<SearchFeature placeholder="Search Transaction Code" />

					<table className="mb-5 w-full border-collapse text-center text-slate-600">
						<thead>
							<tr className="border-b-2 border-slate-400">
								<th>Date</th>
								<th>Code</th>
								<th>Cashier</th>
								<th>Total</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{transactionList.map((transaction, index) => {
								return (
									<tr className="border-b border-slate-400" key={index}>
										<td className="py-1">
											{moment(transaction.createdAt).local("id").format("L")}
										</td>
										<td className="py-1">{transaction.transaction_id}</td>
										<td className="py-1">-</td>
										<td className="py-1">
											{formatterIDR(transaction.grand_total)}
										</td>
										<td className="flex justify-center py-1">
											<div
												onClick={() => {
													naviagte(
														`/transaction/detail/${transaction.transaction_id}`
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
							handleSetPage={handleSetPage}
							handleNext={handleNext}
							handlePrev={handlePrev}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TransactionList;
