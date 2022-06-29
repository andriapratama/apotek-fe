export const useFormatterHook = () => {
	//Formatter Stock Start
	const formatterStock = (value) => {
		const reverse = value.toString().split("").reverse().join("");
		const modify = reverse.match(/\d{1,3}/g);
		const format = modify.join(".").split("").reverse().join("");

		return format;
	};
	//Formatter Stock End

	//Formatter IDR Start
	const formatterIDR = (value) => {
		if (!value) {
			const IDR = "Rp 0";
			return IDR;
		} else {
			const format = value.toString().split("").reverse().join("");
			const convert = format.match(/\d{1,3}/g);
			const IDR = "Rp " + convert.join(".").split("").reverse().join("");

			return IDR;
		}
	};
	//Formatter IDR End

	return { formatterIDR, formatterStock };
};

export default useFormatterHook;
