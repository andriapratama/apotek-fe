import { TextField } from "../../../components/form.field";
import { ButtonPrimay, ButtonSecondary } from "../../../components/button";

function RoleEdit({
	formik,
	errorsMessage,
	setErrorsMessage,
	setIsShowUpdate,
	setRoleValue,
}) {
	return (
		<form className="relative h-auto w-full" onSubmit={formik.handleSubmit}>
			<div
				className="flex w-full items-center justify-start"
				onClick={() => setErrorsMessage("")}
			>
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

				<div
					onClick={() => {
						setIsShowUpdate(false);
						setRoleValue({
							roleId: "",
							name: "",
						});
					}}
				>
					<ButtonSecondary name="cancel" type="button" />
				</div>
			</div>

			{errorsMessage ? (
				<div className="absolute text-xs text-red-500">{errorsMessage}</div>
			) : null}
		</form>
	);
}

export default RoleEdit;
