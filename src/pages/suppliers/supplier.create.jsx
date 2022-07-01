import { ButtonPrimay, ButtonSecondary } from "../../components/button";
import { TextField } from "../../components/form-fields/text.field";
import { TextareaField } from "../../components/form-fields/text-area.field";
import ModalBackground from "../../components/modals/modal.background";
import ModalContent from "../../components/modals/modal.content";
import ModalTitle from "../../components/modals/modal.title";
import ErrorWithBg from "../../components/errors/error.background";
import ModalBody from "../../components/modals/modal.body";
import ModalFooter from "../../components/modals/modal.footer";

function SupplierCreate({
	isShowCreate,
	setIsShowCreate,
	formik,
	errors,
	setErrors,
}) {
	return (
		<>
			<ModalBackground state={isShowCreate}></ModalBackground>

			<ModalContent state={isShowCreate} width="w-[500px]">
				<form onSubmit={formik.handleSubmit}>
					<ModalTitle>Add Supplier Form</ModalTitle>

					<ModalBody>
						{errors ? <ErrorWithBg>{errors}</ErrorWithBg> : null}

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
					</ModalBody>

					<ModalFooter>
						<div className="mr-3">
							<ButtonPrimay name="Save" type="submit" />
						</div>

						<ButtonSecondary
							name="Cancel"
							type="button"
							onClick={() => {
								setIsShowCreate(false);
								setTimeout(() => {
									setErrors("");
									formik.resetForm();
								}, 200);
							}}
						/>
					</ModalFooter>
				</form>
			</ModalContent>
		</>
	);
}

export default SupplierCreate;
