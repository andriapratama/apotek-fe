import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteTypeDataApi } from "../../../api/type.api";
import TypeCreate from "./type.create";
import TypeEdit from "./type.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useTypeHook } from "./type.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";

function Type() {
	const {
		typeList,
		typeValue,
		setTypeValue,
		showAllTypeData,
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
		handleSearchType,
	} = useTypeHook();
	return (
		<section className="type min-h-[80vh] w-full">
			<DangerAlert
				id={typeValue.typeId}
				deleteDataApi={deleteTypeDataApi}
				showAllData={showAllTypeData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<TitleSection>Data Jenis Obat</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<TypeEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setTypeValue={setTypeValue}
					/>
				) : (
					<TypeCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
					<input
						className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
						placeholder="Search"
						type="text"
						onChange={(e) => handleSearchType(e.target.value)}
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
						{typeList.map((type, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td>{type.type_id}</td>
									<td className="capitalize">{type.name}</td>
									<td className="flex justify-center py-2">
										<div onClick={() => handleEdit(type)}>
											<IconButtonEdit />
										</div>
										<div
											onClick={() => {
												setTypeValue({
													typeId: type.type_id,
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

				<div className="type__footer flex">
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

export default Type;
