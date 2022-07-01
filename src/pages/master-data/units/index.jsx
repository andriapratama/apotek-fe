import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteUnitDataApi } from "../../../api/unit.api";
import UnitCreate from "./unit.create";
import UnitEdit from "./unit.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useUnitHook } from "./unit.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";
import { SearchFeature } from "../../../components/search";

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

			<TitleSection>Data Satuan Obat</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<UnitEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setUnitValue={setUnitValue}
					/>
				) : (
					<UnitCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<SearchFeature
					placeholder="Search"
					onChange={(e) => handleSearchUnit(e.target.value)}
				/>

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th>No</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{unitList.map((unit, index) => {
							return (
								<tr className="tr-body" key={index}>
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
			</CardContent>
		</section>
	);
}

export default Unit;
