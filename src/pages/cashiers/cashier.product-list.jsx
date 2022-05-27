import { IconButtonAddMd } from "../../components/button";
import { useFormatterHook } from "../../components/formatter.hook";

const CashierProductList = ({
	isShowProductList,
	setIsShowProductList,
	productList,
	transactionList,
	setTransactionList,
	setErrorMessage,
}) => {
	const { formatterIDR } = useFormatterHook();
	return (
		<div
			className={`card absolute z-[99999] min-h-[50vh] w-full ${
				isShowProductList ? "scale-100 duration-300" : "scale-0 duration-300"
			}`}
		>
			<div className="relative flex h-[50px] w-full items-center border-b border-slate-400">
				<p className="absolute w-full text-center text-xl font-bold tracking-wider text-slate-600">
					Pilih Produk
				</p>
				<div className="absolute z-[999] flex w-full justify-end">
					<i
						className="fa-solid fa-xmark cursor-pointer pr-5 text-xl"
						onClick={() => setIsShowProductList(false)}
					/>
				</div>
			</div>

			<div className="p-5">
				<table className="table">
					<thead className="text-left text-sm">
						<tr className="border-b-2 border-slate-400">
							<th className="pl-2">Kode Obat</th>
							<th className="pl-2">Nama Obat</th>
							<th className="pl-2">Harga</th>
							<th className="pl-2">Stok</th>
							<th className="pl-2">Unit</th>
							<th className="pl-2">Kategori</th>
							<th className="pl-2">Merk</th>
							<th className="pl-2">Lokasi</th>
							<th className="pl-2">Action</th>
						</tr>
					</thead>
					<tbody className="text-slate text-sm">
						{productList.map((product, index) => {
							return (
								<tr
									className={`border border-t-0 border-slate-400 bg-slate-100 ${
										index % 2 === 0 ? "bg-slate-200" : "bg-white"
									}`}
									key={index}
								>
									<td className="px-2 py-1">{product.product_id}</td>
									<td className="px-2 py-1">{product.name}</td>
									<td className="px-2 py-1">
										{formatterIDR(product.selling_price)}
									</td>
									<td className="px-2 py-1">{product.stock}</td>
									<td className="px-2 py-1">{product.unit.name}</td>
									<td className="px-2 py-1">{product.category.name}</td>
									<td className="px-2 py-1">{product.brand.name}</td>
									<td className="px-2 py-1">
										{product.product_locations.map((location, index) => {
											return <span key={index}>{location.name}</span>;
										})}
									</td>
									<td className="px-2 py-1">
										<div
											onClick={() => {
												const arr = transactionList.findIndex(
													(value) => value.productId === product.product_id
												);

												if (arr === -1) {
													setTransactionList([
														...transactionList,
														{
															productId: product.product_id,
															name: product.name,
															quantity: 1,
															price: parseInt(product.selling_price),
															discount: 0,
															totalDiscount: 0,
															subTotal: 1 * parseInt(product.selling_price),
															total: 1 * parseInt(product.selling_price),
														},
													]);
												}

												setIsShowProductList(false);
												setErrorMessage("");
											}}
										>
											<IconButtonAddMd />
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CashierProductList;
