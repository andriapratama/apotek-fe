import { TextField } from "../../../components/form-fields/text.field";
import { ButtonPrimay } from "../../../components/button";

function TypeCreate({ formik }) {
	return (
		<form className="relative h-auto w-full" onSubmit={formik.handleSubmit}>
			<div className="flex w-full items-center justify-start">
				<div className="mr-5 w-[300px]">
					<TextField
						name="name"
						placeholder="Input type name"
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

export default TypeCreate;
