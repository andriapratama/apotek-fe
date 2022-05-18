import { ButtonPrimay, ButtonSecondary } from "../../components/button";
import { TextField, TextareaField } from "../../components/form.field";

function SupplierEdit({
	isShowEdit,
	setIsShowEdit,
	formik,
	errors,
	setErrors,
}) {
	return (
		<div className={isShowEdit ? `visible` : "invisible"}>
			<div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] bg-slate-500 opacity-70"></div>
			<div
				className="fixed top-0 left-0 right-0 z-[9999] flex justify-center"
				onClick={() => setIsShowEdit(false)}
			>
				<form
					className="mt-[100px] h-auto w-[500px] rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-500"
					onClick={(e) => e.stopPropagation()}
					onSubmit={formik.handleSubmit}
				>
					<div className="supplier-edit__head border-b border-slate-200 p-5">
						<span className="text-3xl text-slate-700">Add Supplier Form</span>
					</div>

					<div className="supplier-edit__body border-b border-slate-200 p-5">
						{errors ? (
							<div className="mb-5 w-full text-center text-red-500">
								{errors}
							</div>
						) : null}

						<div className="mb-5 w-full">
							<p className="text-slate-700">Supplier Name</p>
							<TextField
								name="name"
								placeholder="ex: PT. Obat Sehat"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								errorMessage={formik.errors.name}
								touched={formik.touched.name}
								onClick={() => setErrors("")}
							/>
						</div>

						<div className="mb-5 w-full">
							<p className="text-slate-700">Phone</p>
							<TextField
								name="phone"
								placeholder="ex: +6289304920490"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.phone}
								errorMessage={formik.errors.phone}
								touched={formik.touched.phone}
							/>
						</div>

						<div className=" w-full">
							<p className="text-slate-700">Address</p>
							<TextareaField
								name="address"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.address}
								errorMessage={formik.errors.address}
								touched={formik.touched.address}
							/>
						</div>
					</div>

					<div className="supplier-edit__footer flex p-5">
						<div className="mr-3">
							<ButtonPrimay name="Save" type="submit" />
						</div>
						<div onClick={() => setIsShowEdit(false)}>
							<ButtonSecondary name="Cancel" type="button" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SupplierEdit;
