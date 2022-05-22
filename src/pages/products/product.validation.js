import * as yup from "yup";

export const validation = yup.object({
	name: yup
		.string()
		.required("Product name is required")
		.min(6, "Name must be 6 characters"),
	category: yup.string().required("Category is required"),
	type: yup.array().required("Type is required"),
	group: yup.string().required("Group is required"),
	unit: yup.string().required("Unit is required"),
	location: yup.array().required("Location is required"),
	brand: yup.string().required("Brand is required"),
	supplier: yup.array().required("Supplier is required"),
	stock: yup.string().required("Stock is required"),
	stockMin: yup.string().required("Stock min is required"),
	purchasePrice: yup.string().required("Purchase price is required"),
	sellingPrice: yup.string().required("Selling price is required"),
});
