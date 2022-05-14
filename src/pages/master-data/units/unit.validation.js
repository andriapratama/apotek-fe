import * as yup from "yup";

export const validation = yup.object({
	name: yup.string().required("Unit name is required"),
});
