import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteRoleDataApi } from "../../../api/role.api";
import RoleCreate from "./role.create";
import RoleEdit from "./role.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useRoleHook } from "./role.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";
import { SearchFeature } from "../../../components/search";

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
		formikStore,
		formikUpdate,
		totalPage,
		handleNext,
		handlePrev,
		handleSetPage,
		page,
		handleSearchRole,
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

			<TitleSection>Data Role</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<RoleEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setRoleValue={setRoleValue}
					/>
				) : (
					<RoleCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<SearchFeature
					placeholder="Search"
					onChange={(e) => handleSearchRole(e.target.value)}
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
						{roleList.map((role, index) => {
							return (
								<tr className="tr-body" key={index}>
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
						handleSetPage={handleSetPage}
						handleNext={handleNext}
						handlePrev={handlePrev}
					/>
				</div>
			</CardContent>
		</section>
	);
}

export default Role;
