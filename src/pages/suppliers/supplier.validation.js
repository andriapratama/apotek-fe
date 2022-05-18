import * as yup from "yup";
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validation = yup.object({
	name: yup.string().required("Supplier name is required"),
	phone: yup
		.string()
		.required("Supplier phone number is required")
		.matches(phoneRegExp, "Phone number is not valid")
		.min(9, "Phone number is not valid")
		.max(12, "Phone number is not valid"),
	address: yup.string().required("Supplier address is required"),
});
