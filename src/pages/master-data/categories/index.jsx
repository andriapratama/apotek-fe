import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteCategoryDataApi } from "../../../api/category.api";
import CategoryCreate from "./category.create";
import CategoryEdit from "./category.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useCategoryHook } from "./category.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";
import { SearchFeature } from "../../../components/search";

function Category() {
	const {
		categoryList,
		categoryValue,
		setCategoryValue,
		showAllCategoryData,
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
		handleSearchCategory,
	} = useCategoryHook();
	return (
		<section className="category min-h-[80vh] w-full">
			<DangerAlert
				id={categoryValue.categoryId}
				deleteDataApi={deleteCategoryDataApi}
				showAllData={showAllCategoryData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<TitleSection>Data Kategori Obat</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<CategoryEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setCategoryValue={setCategoryValue}
					/>
				) : (
					<CategoryCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<SearchFeature
					placeholder="Search"
					onChange={(e) => handleSearchCategory(e.target.value)}
				/>

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th>Code</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{categoryList.map((category, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td>{category.category_id}</td>
									<td className="capitalize">{category.name}</td>
									<td className="flex justify-center py-2">
										<div onClick={() => handleEdit(category)}>
											<IconButtonEdit />
										</div>
										<div
											onClick={() => {
												setCategoryValue({
													categoryId: category.category_id,
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

				<div className="category__footer flex">
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

export default Category;
