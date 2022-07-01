import moment from "moment";
import "moment/locale/id";
import { useNavigate } from "react-router-dom";
import { IconButtonDetail } from "../../components/button";
import { Pagination } from "../../components/pagination";
import { SearchFeature } from "../../components/search";
import useTransactionHook from "./transaction.hook";
import useFormatterHook from "../../components/formatter.hook";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";

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
			<TitleSection>Transaction List</TitleSection>

			<CardContent>
				<SearchFeature placeholder="Search Transaction Code" />

				<table className="table">
					<thead>
						<tr className="tr-head">
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
								<tr className="tr-body" key={index}>
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
			</CardContent>
		</section>
	);
}

export default TransactionList;
