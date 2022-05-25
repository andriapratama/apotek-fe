import { IconButtonDetail } from "../../components/button";
import { SearchFeature } from "../../components/search";

function TransactionList() {
	return (
		<section className="transaction-list min-h-[80vh] w-full">
			<div className="transaction-list__head mb-5">
				<span className="text-2xl text-slate-600">Transaction List</span>
			</div>

			<div className="transaction-list__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-400">
				<div className="p-5">
					<SearchFeature placeholder="Search name product" />

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
							<tr className="border-b border-slate-400">
								<td className="py-1">12/12/2012</td>
								<td className="py-1">TS20121212001</td>
								<td className="py-1">-</td>
								<td className="py-1">Rp 50.000</td>
								<td className="flex justify-center py-1">
									<IconButtonDetail />
								</td>
							</tr>
							<tr className="border-b border-slate-400">
								<td className="py-1">12/12/2012</td>
								<td className="py-1">TS20121212002</td>
								<td className="py-1">-</td>
								<td className="py-1">Rp 50.000</td>
								<td className="flex justify-center py-1">
									<IconButtonDetail />
								</td>
							</tr>
							<tr className="border-b border-slate-400">
								<td className="py-1">12/12/2012</td>
								<td className="py-1">TS20121212003</td>
								<td className="py-1">-</td>
								<td className="py-1">Rp 50.000</td>
								<td className="flex justify-center py-1">
									<IconButtonDetail />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

export default TransactionList;
