import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteUnitDataApi } from "../../../api/unit.api";
import UnitCreate from "./unit.create";
import UnitEdit from "./unit.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useUnitHook } from "./unit.hook";

function Unit() {
	const {
		unitList,
		unitValue,
		setUnitValue,
		showAllUnitData,
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
		handleSearchUnit,
	} = useUnitHook();
	return (
		<section className="unit min-h-[80vh] w-full">
			<DangerAlert
				id={unitValue.unitId}
				deleteDataApi={deleteUnitDataApi}
				showAllData={showAllUnitData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<div className="unit__head mb-5">
				<span className="text-2xl text-slate-600">
					Data Satuan Terkecil Obat
				</span>
			</div>

			<div className="unit__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<UnitEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setUnitValue={setUnitValue}
						/>
					) : (
						<UnitCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="unit__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							unit="text"
							onChange={(e) => handleSearchUnit(e.target.value)}
						/>
						<div className="flex w-[50px] items-center justify-center border-l-2">
							<i className="fa-solid fa-magnifying-glass text-slate-700" />
						</div>
					</div>

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>No</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{unitList.map((unit, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
										<td>{index + 1}</td>
										<td className="capitalize">{unit.name}</td>
										<td className="flex justify-center py-2">
											<div onClick={() => handleEdit(unit)}>
												<IconButtonEdit />
											</div>
											<div
												onClick={() => {
													setUnitValue({
														unitId: unit.unit_id,
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

					<div className="unit__footer flex">
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

export default Unit;
