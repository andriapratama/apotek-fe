import * as yup from "yup";

export const validation = yup.object({
	name: yup.string().required("Location name is required"),
});
