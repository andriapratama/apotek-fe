import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	ButtonPrimayLg,
	IconButtonDeleteSm,
	IconButtonDetailSm,
	IconButtonEditSm,
} from "../../components/button";
import { useProductHook } from "./product.hook";
import { Pagination } from "../../components/pagination";
import { setProductIdRedux } from "../../stores/reducers/product-id.reducer";
import { setPagePriceRedux } from "../../stores/reducers/pagination.price.reducer";
import { setPageStockRedux } from "../../stores/reducers/pagination.stock.reducer";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";
import { SearchFeature } from "../../components/search";

function ProductList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		productList,
		totalPage,
		page,
		handleNext,
		handlePrev,
		handleSetPage,
		formatterStock,
		formatterIDR,
		handleSearchProduct,
	} = useProductHook();

	return (
		<section className="product-list min-h-[80vh] w-full">
			<TitleSection>Product List</TitleSection>

			<CardContent>
				<div className="mb-5">
					<ButtonPrimayLg
						name="Add Product"
						type="button"
						onClick={() => navigate("/product/create")}
					/>
				</div>

				<SearchFeature
					placeholder="Search name product"
					onChange={(e) => handleSearchProduct(e.target.value)}
				/>

				<table className="mb-5 w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-t-2 border-slate-400">
							<th className="border-l-2 border-r-2 border-slate-400 py-2 pl-2 text-left">
								Kode Obat
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Nama Obat
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Harga beli
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Harga jual
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Stok
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Satuan
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Kategori
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Merk
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Lokasi
							</th>
							<th className="border-r-2 border-slate-400 py-2 pl-2 text-left">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{productList.map((product, index) => {
							return (
								<tr
									className={`border-b-2 border-r-2 border-slate-400 ${
										index % 2 === 0 ? "bg-slate-200" : "bg-white"
									}`}
									key={index}
								>
									<td className="border-r-2 border-l-2 border-slate-400 py-2 px-2 text-left">
										{product.product_id}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left">
										{product.name}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left">
										{formatterIDR(product.purchase_price)}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left">
										{formatterIDR(product.selling_price)}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left">
										{formatterStock(product.stock)}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left capitalize">
										{product.unit.name}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left capitalize">
										{product.category.name}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left capitalize">
										{product.brand.name}
									</td>
									<td className="border-r-2 border-slate-400 py-2 px-2 text-left capitalize">
										{product.product_locations.map((location, idx) => {
											return <div key={idx}>{location.name}</div>;
										})}
									</td>
									<td className="flex border-slate-400 py-2 px-2 text-left">
										<div
											onClick={() => {
												navigate("/product/detail");
												dispatch(setProductIdRedux(product.product_id));
												dispatch(setPageStockRedux(1));
												dispatch(setPagePriceRedux(1));
											}}
										>
											<IconButtonDetailSm />
										</div>

										<IconButtonEditSm />

										<IconButtonDeleteSm />
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

export default ProductList;
