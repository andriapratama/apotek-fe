import { IconButtonDelete, IconButtonEdit } from "../../../components/button";
import { deleteLocationDataApi } from "../../../api/location.api";
import LocationCreate from "./location.create";
import LocationEdit from "./location.edit";
import { Pagination } from "../../../components/pagination";
import { DangerAlert } from "../../../components/alerts/danger.alert";
import { useLocationHook } from "./location.hook";
import TitleSection from "../../../components/title-sections/title-section";
import CardContent from "../../../components/cards/card.content";
import { SearchFeature } from "../../../components/search";

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

			<TitleSection>Data Location</TitleSection>

			<CardContent>
				{isShowUpdate ? (
					<LocationEdit
						formik={formikUpdate}
						setIsShowUpdate={setIsShowUpdate}
						setLocationValue={setLocationValue}
					/>
				) : (
					<LocationCreate formik={formikStore} />
				)}
			</CardContent>

			<CardContent>
				<SearchFeature
					placeholder="Search"
					onChange={(e) => handleSearchLocation(e.target.value)}
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
						{locationList.map((location, index) => {
							return (
								<tr className="tr-body" key={index}>
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
			</CardContent>
		</section>
	);
}

export default Location;
