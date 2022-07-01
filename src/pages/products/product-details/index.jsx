import { useProductHook } from "../product.hook";
import { useProductDetailHook } from "./product-detail.hook";
import StockHistory from "./product-detail.stock-history";
import PriceHistory from "./product-detail.price-history";
import CardContent from "../../../components/cards/card.content";

function ProductDetail() {
	const { formatterStock, formatterIDR } = useProductHook();

	const { productValue } = useProductDetailHook();

	return (
		<section className="product-detail w-full">
			<div className="product-detail__info mb-5 flex w-full justify-center">
				<div className="w-8/12">
					<CardContent>
						<div className="p-5">
							<div className="mb-5 text-2xl font-bold tracking-wide text-slate-600">
								{productValue.name}
							</div>

							<div className="mb-5 flex justify-between">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Kategori</p>
									<p className="mb-1 capitalize text-slate-600">
										{productValue.category}
									</p>
								</div>

								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Satuan</p>
									<p className="mb-1 capitalize text-slate-600">
										{productValue.unit}
									</p>
								</div>
							</div>

							<div className="mb-5 flex justify-between">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Jenis</p>
									<div className="mb-1 flex capitalize text-slate-600">
										{productValue.typeList.map((type, index) => {
											return (
												<p key={index}>
													{index === productValue.typeList.length - 1 ? (
														<span>{type.name}</span>
													) : (
														<span className="mr-1">{type.name},</span>
													)}
												</p>
											);
										})}
									</div>
								</div>

								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Golongan</p>
									<p className="mb-1 capitalize text-slate-600">
										{productValue.group}
									</p>
								</div>
							</div>

							<div className="mb-5 flex justify-between">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Merk</p>
									<p className="mb-1 capitalize text-slate-600">
										{productValue.brand}
									</p>
								</div>

								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Supplier</p>
									<div className="mb-1 text-slate-600">
										{productValue.supplierList.map((supplier, index) => {
											return (
												<p key={index}>
													{index === productValue.supplierList.length - 1 ? (
														<span>{supplier.name}</span>
													) : (
														<span className="mr-1">{supplier.name},</span>
													)}
												</p>
											);
										})}
									</div>
								</div>
							</div>

							<div className="mb-5 flex justify-between">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Stock</p>
									<p className="mb-1 text-slate-600">
										{formatterStock(productValue.stock)}
									</p>
								</div>

								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">Stock Min</p>
									<p className="mb-1 text-slate-600">
										{formatterStock(productValue.stockMin)}
									</p>
								</div>
							</div>

							<div className="mb-5 flex justify-between">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">
										Harga Jual
									</p>
									<p className="mb-1 text-slate-600">
										{formatterIDR(productValue.sellingPrice)}
									</p>
								</div>

								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">
										Harga Beli
									</p>
									<p className="mb-1 text-slate-600">
										{formatterIDR(productValue.purchasePrice)}
									</p>
								</div>
							</div>

							<div className="flex justify-start">
								<div className="w-[48%] border-b-2 border-slate-400 pb-4">
									<p className="mb-1 font-semibold text-slate-700">
										Lokasi Penyimpanan
									</p>
									<div className="mb-1 flex capitalize text-slate-600">
										{productValue.locationList.map((location, index) => {
											return (
												<p key={index}>
													{index === productValue.locationList.length - 1 ? (
														<span>{location.name}</span>
													) : (
														<span className="mr-1">{location.name},</span>
													)}
												</p>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</div>
			</div>

			<StockHistory />

			<PriceHistory />
		</section>
	);
}

export default ProductDetail;
