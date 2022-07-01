import { TextField } from "../../../components/form-fields/text.field";
import { ButtonPrimay, ButtonSecondary } from "../../../components/button";

function RoleEdit({ formik, setIsShowUpdate, setRoleValue }) {
	return (
		<form className="relative h-auto w-full" onSubmit={formik.handleSubmit}>
			<div className="flex w-full items-center justify-start">
				<div className="mr-5 w-[300px]">
					<TextField
						name="name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						errorMessage={formik.errors.name}
						touched={formik.touched.name}
					/>
				</div>

				<div className="mr-3">
					<ButtonPrimay name="update" type="submit" />
				</div>

				<ButtonSecondary
					name="cancel"
					type="button"
					onClick={() => {
						setIsShowUpdate(false);
						setRoleValue({
							roleId: "",
							name: "",
						});
					}}
				/>
			</div>
		</form>
	);
}

export default RoleEdit;
