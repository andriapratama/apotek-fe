import { TextField } from "../../../components/form-fields/text.field";
import { ButtonPrimay } from "../../../components/button";

function RoleCreate({ formik }) {
	return (
		<form className="relative h-auto w-full" onSubmit={formik.handleSubmit}>
			<div className="flex w-full items-center justify-start">
				<div className="mr-5 w-[300px]">
					<TextField
						name="name"
						placeholder="Input role name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						errorMessage={formik.errors.name}
						touched={formik.touched.name}
					/>
				</div>

				<ButtonPrimay name="save" type="submit" />
			</div>
		</form>
	);
}

export default RoleCreate;
