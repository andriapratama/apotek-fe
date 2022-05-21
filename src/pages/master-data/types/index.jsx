import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteTypeDataApi } from "../../../api/type.api";
import TypeCreate from "./type.create";
import TypeEdit from "./type.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useTypeHook } from "./type.hook";

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
		errorsMessage,
		setErrorsMessage,
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
			<div className="type__head mb-5">
				<span className="text-2xl text-slate-600">Data Jenis Obat</span>
			</div>

			<div className="type__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<TypeEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setTypeValue={setTypeValue}
						/>
					) : (
						<TypeCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="type__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
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

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>Code</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{typeList.map((type, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
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
				</div>
			</div>
		</section>
	);
}

export default Type;
