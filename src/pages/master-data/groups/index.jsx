import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteGroupDataApi } from "../../../api/group.api";
import GroupCreate from "./group.create";
import GroupEdit from "./group.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useGroupHook } from "./group.hook";

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
		errorsMessage,
		setErrorsMessage,
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

			<div className="group__head mb-5">
				<span className="text-2xl text-slate-600">Data Golongan Obat</span>
			</div>

			<div className="group__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<GroupEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setGroupValue={setGroupValue}
						/>
					) : (
						<GroupCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="group__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
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

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>Code</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{groupList.map((group, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
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
				</div>
			</div>
		</section>
	);
}

export default Group;
