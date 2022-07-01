import { TextField } from "../../../components/form-fields/text.field";
import { ButtonPrimay } from "../../../components/button";

function LocationCreate({ formik, errorsMessage, setErrorsMessage }) {
	return (
		<form className="relative h-auto w-full" onSubmit={formik.handleSubmit}>
			<div
				className="flex w-full items-center justify-start"
				onClick={() => setErrorsMessage("")}
			>
				<div className="mr-5 w-[300px]">
					<TextField
						name="name"
						placeholder="Input location name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						errorMessage={formik.errors.name}
						touched={formik.touched.name}
					/>
				</div>

				<ButtonPrimay name="save" type="submit" />
			</div>

			{errorsMessage ? (
				<div className="absolute text-xs text-red-500">{errorsMessage}</div>
			) : null}
		</form>
	);
}

export default LocationCreate;
