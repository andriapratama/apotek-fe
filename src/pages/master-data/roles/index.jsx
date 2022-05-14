import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteRoleDataApi } from "../../../api/role.api";
import RoleCreate from "./role.create";
import RoleEdit from "./role.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useRoleHook } from "./role.hook";

function Role() {
	const {
		roleList,
		roleValue,
		setRoleValue,
		showAllRoleData,
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
	} = useRoleHook();

	return (
		<section className="role min-h-[80vh] w-full">
			<DangerAlert
				id={roleValue.roleId}
				deleteDataApi={deleteRoleDataApi}
				showAllData={showAllRoleData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>
			<div className="role__head mb-5">
				<span className="text-2xl text-slate-600">Data Role</span>
			</div>

			<div className="role__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<RoleEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setRoleValue={setRoleValue}
						/>
					) : (
						<RoleCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="role__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
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
								<th>No</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{roleList.map((role, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
										<td>{index + 1}</td>
										<td className="capitalize">{role.name}</td>
										<td className="flex justify-center py-2">
											<div onClick={() => handleEdit(role)}>
												<IconButtonEdit />
											</div>
											<div
												onClick={() => {
													setRoleValue({
														roleId: role.role_id,
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

					<div className="role__footer flex">
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

export default Role;
