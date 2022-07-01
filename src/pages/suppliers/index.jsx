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
				<div className="mb-5" onClick={() => setIsShowCreate(true)}>
					<ButtonPrimayLg name="Add Supplier" type="button" />
				</div>

				<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
					<input
						className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
						placeholder="Search name supplier"
						type="text"
						onChange={(e) => handleSearch(e.target.value)}
					/>
					<div className="flex w-[50px] items-center justify-center border-l-2">
						<i className="fa-solid fa-magnifying-glass text-slate-700" />
					</div>
				</div>

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
