import {
	ButtonPrimayLg,
	IconButtonDelete,
	IconButtonEdit,
} from "../../components/button";
import { Pagination } from "../../components/pagination";
import SupplierCreate from "./supplier.create";
import SupplierEdit from "./supplier.edit";
import { useSupplierHook } from "./supplier.hook";
import { DangerAlert } from "../../components/alerts/danger.alert";
import { deleteSupplierDataApi } from "../../api/supplier.api";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";
import { SearchFeature } from "../../components/search";

function SupplierList() {
	const {
		isShowCreate,
		setIsShowCreate,
		formikStore,
		errorsMessage,
		setErrorsMessage,
		supplierList,
		handleEdit,
		formikUpdate,
		isShowEdit,
		setIsShowEdit,
		supplierValue,
		setSupplierValue,
		isDangerAlert,
		setIsDangerAlert,
		showAllSupplierData,
		handleNext,
		handlePrev,
		handleSetPage,
		page,
		totalPage,
		handleSearch,
	} = useSupplierHook();

	return (
		<section className="supplier-list min-h-[80vh] w-full">
			<SupplierCreate
				isShowCreate={isShowCreate}
				setIsShowCreate={setIsShowCreate}
				formik={formikStore}
				errors={errorsMessage}
				setErrors={setErrorsMessage}
			/>

			<SupplierEdit
				isShowEdit={isShowEdit}
				setIsShowEdit={setIsShowEdit}
				formik={formikUpdate}
				errors={errorsMessage}
				setErrors={setErrorsMessage}
			/>

			<DangerAlert
				id={supplierValue.supplierId}
				deleteDataApi={deleteSupplierDataApi}
				showAllData={showAllSupplierData}
				isDangerAlert={isDangerAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<TitleSection>Supplier List</TitleSection>

			<CardContent>
				<div className="mb-5">
					<ButtonPrimayLg
						name="Add Supplier"
						type="button"
						onClick={() => setIsShowCreate(true)}
					/>
				</div>

				<SearchFeature
					placeholder="Search name supplier"
					onChange={(e) => handleSearch(e.target.value)}
				/>

				<table className="table">
					<thead>
						<tr className="tr-head">
							<th className="w-[60px] text-center">No</th>
							<th className="text-left">Name</th>
							<th className="text-left">Phone</th>
							<th className="text-left">Address</th>
							<th className="text-center">Action</th>
						</tr>
					</thead>
					<tbody>
						{supplierList.map((supplier, index) => {
							return (
								<tr className="tr-body" key={index}>
									<td className="text-center">{index + 1}</td>
									<td className="w-[380px] text-left">{supplier.name}</td>
									<td className="text-left">{supplier.phone}</td>
									<td className="w-[380px] text-left">{supplier.address}</td>
									<td className="flex h-full justify-center py-2">
										<div className="flex h-full items-center">
											<div
												onClick={() => {
													handleEdit(supplier);
												}}
											>
												<IconButtonEdit />
											</div>

											<div
												onClick={() => {
													setSupplierValue({
														supplierId: supplier.supplier_id,
														name: "",
														phone: "",
														address: "",
													});
													setIsDangerAlert(true);
												}}
											>
												<IconButtonDelete />
											</div>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<div className="flex">
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

export default SupplierList;
