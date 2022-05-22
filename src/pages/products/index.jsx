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
			<div className="product-list__head mb-5">
				<span className="text-2xl text-slate-600">Product List</span>
			</div>

			<div className="product-list__body mb-5 w-full rounded-lg border border-slate-400 bg-white shadow-lg shadow-slate-400">
				<div className="p-5">
					<div
						className="mb-5"
						onClick={() => navigate("/product/product-create")}
					>
						<ButtonPrimayLg name="Add Product" type="button" />
					</div>

					<div className="mb-5 flex w-[350px] rounded-md border border-slate-400">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search name product"
							type="text"
							onChange={(e) => handleSearchProduct(e.target.value)}
						/>
						<div className="flex w-[50px] items-center justify-center border-l-2">
							<i className="fa-solid fa-magnifying-glass text-slate-700" />
						</div>
					</div>

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
									Supplier
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
										className="border-b-2 border-r-2 border-slate-400"
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
										<td className="border-r-2 border-slate-400 py-2 px-2 text-left">
											{product.product_suppliers.map((supplier, idx) => {
												return <div key={idx}>{supplier.name}</div>;
											})}
										</td>
										<td className="border-r-2 border-slate-400 py-2 px-2 text-left capitalize">
											{product.product_locations.map((location, idx) => {
												return <div key={idx}>{location.name}</div>;
											})}
										</td>
										<td className="flex border-slate-400 py-2 px-2 text-left">
											<div
												onClick={() => {
													navigate("/product/product-detail");
													dispatch(setProductIdRedux(product.product_id));
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
				</div>
			</div>
		</section>
	);
}

export default ProductList;
