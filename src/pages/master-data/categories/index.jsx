import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteCategoryDataApi } from "../../../api/category.api";
import CategoryCreate from "./category.create";
import CategoryEdit from "./category.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useCategoryHook } from "./category.hook";

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
		errorsMessage,
		setErrorsMessage,
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		page,
		handleSearch,
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
			<div className="category__head mb-5">
				<span className="text-2xl text-slate-600">Data Kategori Obat</span>
			</div>

			<div className="category__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<CategoryEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setCategoryValue={setCategoryValue}
						/>
					) : (
						<CategoryCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="category__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							type="text"
							onChange={(e) => handleSearch(e.target.value)}
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
							{categoryList.map((category, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
										<td>{index + 1}</td>
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
							handleNext={handleNext}
							handlePrev={handlePrev}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Category;
