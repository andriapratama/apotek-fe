import moment from "moment";
import "moment/locale/id";
import { PaginationPrice } from "../../../components/pagination";
import { useProductHook } from "../product.hook";
import { useProductDetailHook } from "./product-detail.hook";

function PriceHistory() {
	const { formatterIDR } = useProductHook();

	const {
		priceList,
		pagePrice,
		totalPagePrice,
		handleSetPagePrice,
		handleNextPrice,
		handlePrevPrice,
	} = useProductDetailHook();

	return (
		<div className="product-detail__stock mb-5 flex w-full justify-center">
			<div className="w-8/12 rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-400">
				<div className="p-10">
					<div className="mb-5 text-xl font-medium text-slate-600">
						Price History
					</div>

					<table className="mb-5 w-full border-collapse text-center text-slate-700">
						<thead>
							<tr className="border-b-2 border-slate-400">
								<th>Date</th>
								<th>Purhcase Price</th>
								<th>Selling Price</th>
								<th className="text-left">Note</th>
							</tr>
						</thead>
						<tbody>
							{priceList.map((price, index) => {
								return (
									<tr className="border-b border-slate-400" key={index}>
										<td className="py-1">
											{moment(price.createdAt).locale("id").format("l")}
										</td>
										<td className="py-1">
											{formatterIDR(price.purchase_price)}
										</td>
										<td className="py-1">
											{formatterIDR(price.selling_price)}
										</td>
										<td className="max-w-[350px] py-1 text-left">
											{price.note}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="flex">
						<PaginationPrice
							page={pagePrice}
							totalPage={totalPagePrice}
							handleSetPage={handleSetPagePrice}
							handleNext={handleNextPrice}
							handlePrev={handlePrevPrice}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PriceHistory;
