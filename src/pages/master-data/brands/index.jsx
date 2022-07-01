import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteBrandDataApi } from "../../../api/brand.api";
import BrandCreate from "./brand.create";
import BrandEdit from "./brand.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useBrandHook } from "./brand.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";

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
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
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

			<TitleSection>Data Merk Obat</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<BrandEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setBrandValue={setBrandValue}
					/>
				) : (
					<BrandCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
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

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th>Code</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{brandList.map((brand, index) => {
							return (
								<tr className="tr-body" key={index}>
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
						handleSetPage={handleSetPage}
						handleNext={handleNext}
						handlePrev={handlePrev}
					/>
				</div>
			</CardContent>
		</section>
	);
}

export default Brand;
