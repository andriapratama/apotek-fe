import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteGroupDataApi } from "../../../api/group.api";
import GroupCreate from "./group.create";
import GroupEdit from "./group.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useGroupHook } from "./group.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";

function Group() {
	const {
		groupList,
		groupValue,
		setGroupValue,
		showAllGroupData,
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
		handleSearchGroup,
	} = useGroupHook();

	return (
		<section className="group min-h-[80vh] w-full">
			<DangerAlert
				id={groupValue.groupId}
				deleteDataApi={deleteGroupDataApi}
				showAllData={showAllGroupData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<TitleSection>Data Golongan Obat</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<GroupEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setGroupValue={setGroupValue}
					/>
				) : (
					<GroupCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
					<input
						className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
						placeholder="Search"
						group="text"
						onChange={(e) => handleSearchGroup(e.target.value)}
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
						{groupList.map((group, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td>{group.group_id}</td>
									<td className="capitalize">{group.name}</td>
									<td className="flex justify-center py-2">
										<div onClick={() => handleEdit(group)}>
											<IconButtonEdit />
										</div>
										<div
											onClick={() => {
												setGroupValue({
													groupId: group.group_id,
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

				<div className="group__footer flex">
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

export default Group;
