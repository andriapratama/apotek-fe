import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteBrandDataApi } from "../../../api/brand.api";
import BrandCreate from "./brand.create";
import BrandEdit from "./brand.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useBrandHook } from "./brand.hook";

function Brand() {
	const {
		brandList,
		brandValue,
		setBrandValue,
		showAllBrandData,
		isDangerAlert,
		setIsDangerAlert,
		isShowUpdate,
		setIsShowUpdate,
		handleEdit,
		errorsMessage,
		setErrorsMessage,
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		page,
		handleSearchBrand,
	} = useBrandHook();
	return (
		<section className="brand min-h-[80vh] w-full">
			<DangerAlert
				id={brandValue.brandId}
				deleteDataApi={deleteBrandDataApi}
				showAllData={showAllBrandData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<div className="brand__head mb-5">
				<span className="text-2xl text-slate-600">Data Merk Obat</span>
			</div>

			<div className="brand__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<BrandEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setBrandValue={setBrandValue}
						/>
					) : (
						<BrandCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="brand__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							brand="text"
							onChange={(e) => handleSearchBrand(e.target.value)}
						/>
						<div className="flex w-[50px] items-center justify-center border-l-2">
							<i className="fa-solid fa-magnifying-glass text-slate-700" />
						</div>
					</div>

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>Code</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{brandList.map((brand, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
										<td>{brand.brand_id}</td>
										<td className="capitalize">{brand.name}</td>
										<td className="flex justify-center py-2">
											<div onClick={() => handleEdit(brand)}>
												<IconButtonEdit />
											</div>
											<div
												onClick={() => {
													setBrandValue({
														brandId: brand.brand_id,
														name: "",
													});
													setIsDangerAlert(true);
												}}
											>
												<IconButtonDelete />
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="brand__footer flex">
						<Pagination
							page={page}
							totalPage={totalPage}
							handleNext={handleNext}
							handlePrev={handlePrev}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Brand;
