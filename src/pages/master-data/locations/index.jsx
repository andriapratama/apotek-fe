import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteLocationDataApi } from "../../../api/location.api";
import LocationCreate from "./location.create";
import LocationEdit from "./location.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alert";
import { useLocationHook } from "./location.hook";

function Location() {
	const {
		locationList,
		locationValue,
		setLocationValue,
		showAllLocationData,
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
		handleSearchLocation,
	} = useLocationHook();

	return (
		<section className="location min-h-[80vh] w-full">
			<DangerAlert
				id={locationValue.locationId}
				deleteDataApi={deleteLocationDataApi}
				showAllData={showAllLocationData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>
			<div className="location__head mb-5">
				<span className="text-2xl text-slate-600">Data Location</span>
			</div>

			<div className="location__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					{isShowUpdate ? (
						<LocationEdit
							formik={formikUpdate}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
							setIsShowUpdate={setIsShowUpdate}
							setLocationValue={setLocationValue}
						/>
					) : (
						<LocationCreate
							formik={formikStore}
							errorsMessage={errorsMessage}
							setErrorsMessage={setErrorsMessage}
						/>
					)}
				</div>
			</div>

			<div className="location__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							type="text"
							onChange={(e) => handleSearchLocation(e.target.value)}
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
							{locationList.map((location, index) => {
								return (
									<tr className="border-b border-slate-200" key={index}>
										<td>{index + 1}</td>
										<td className="capitalize">{location.name}</td>
										<td className="flex justify-center py-2">
											<div onClick={() => handleEdit(location)}>
												<IconButtonEdit />
											</div>
											<div
												onClick={() => {
													setLocationValue({
														locationId: location.location_id,
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

					<div className="location__footer flex">
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

export default Location;
