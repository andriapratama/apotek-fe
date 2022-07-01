import moment from "moment";
import "moment/locale/id";
import CardContent from "../../../components/cards/card.content";
import CardTitle from "../../../components/cards/card.titles";
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
			<div className="w-8/12">
				<CardContent>
					<div className="p-5">
						<CardTitle>Price History</CardTitle>

						<table className="table">
							<thead>
								<tr className="tr-head">
									<th>Date</th>
									<th>Purhcase Price</th>
									<th>Selling Price</th>
									<th className="text-left">Note</th>
								</tr>
							</thead>
							<tbody>
								{priceList.map((price, index) => {
									return (
										<tr className="tr-body" key={index}>
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
				</CardContent>
			</div>
		</div>
	);
}

export default PriceHistory;
