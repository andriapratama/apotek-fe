import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ButtonPrimay, ButtonSecondary } from "../../components/button";
import { TextField } from "../../components/form-fields/text.field";
import { CustomSelectField } from "../../components/form-fields/custom-select.field";
import { CustomSelectMultipleField } from "../../components/form-fields/custom-select-multiple";
import { NumberField } from "../../components/form-fields/number.field";
import { validation } from "./product.validation";
import { useCategoryHook } from "../master-data/categories/category.hook";
import { useTypeHook } from "../master-data/types/type.hook";
import { useGroupHook } from "../master-data/groups/group.hook";
import { useUnitHook } from "../master-data/units/unit.hook";
import { useLocationHook } from "../master-data/locations/location.hook";
import { useBrandHook } from "../master-data/brands/brand.hook";
import { useSupplierHook } from "../suppliers/supplier.hook";
import { storeProductDataApi } from "../../api/product.api";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";
import ErrorWithBg from "../../components/errors/error.background";

function ProductCreate() {
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState("");

	const { categoryList, handleSearchCategory } = useCategoryHook();

	const { typeList, handleSearchType } = useTypeHook();

	const { groupList, handleSearchGroup } = useGroupHook();

	const { unitList, handleSearchUnit } = useUnitHook();

	const { locationList, handleSearchLocation } = useLocationHook();

	const { brandList, handleSearchBrand } = useBrandHook();

	const { supplierList, handleSearchSupplier } = useSupplierHook();

	const storeProductData = async (values) => {
		try {
			await storeProductDataApi(
				values.name,
				values.category,
				values.group,
				values.unit,
				values.brand,
				values.stock,
				values.stockMin,
				values.type,
				values.location,
				values.supplier,
				values.purchasePrice,
				values.sellingPrice
			);

			formik.resetForm();
			navigate("/product/list");
		} catch (error) {
			setErrorMessage(error.response.data.message);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			category: "",
			type: [],
			group: "",
			unit: "",
			location: [],
			brand: "",
			supplier: [],
			stock: 0,
			stockMin: 0,
			sellingPrice: 0,
			purchasePrice: 0,
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeProductData(values);
		},
	});
	return (
		<section className="product-create min-h-[80vh] w-full">
			<TitleSection>Add Product</TitleSection>

			<CardContent>
				<form handleSubmit={formik.handleSubmit}>
					<div className="py-10 px-20">
						{errorMessage ? <ErrorWithBg>{errorMessage}</ErrorWithBg> : null}

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Namaa</p>
								<TextField
									name="name"
									placeholder="ex: Paracetamol"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.name}
									touched={formik.touched.name}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Kategori</p>
								<CustomSelectField
									name="category"
									placeholder="Pilih kategori obat"
									value={formik.values.category}
									errorMessage={formik.errors.category}
									touched={formik.touched.category}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									listData={categoryList}
									handleSearch={handleSearchCategory}
								/>
							</div>
						</div>

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Jenis</p>
								<CustomSelectMultipleField
									name="type"
									placeholder="Pilih jenis Obat"
									value={formik.values.type}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.type}
									touched={formik.touched.type}
									listData={typeList}
									handleSearch={handleSearchType}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Golongan</p>
								<CustomSelectField
									name="group"
									placeholder="Pilih golongan obat"
									value={formik.values.group}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.group}
									touched={formik.touched.group}
									listData={groupList}
									handleSearch={handleSearchGroup}
								/>
							</div>
						</div>

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Satuan</p>
								<CustomSelectField
									name="unit"
									placeholder="Pilih satuan obat"
									value={formik.values.unit}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.unit}
									touched={formik.touched.unit}
									listData={unitList}
									handleSearch={handleSearchUnit}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Lokasi</p>
								<CustomSelectMultipleField
									name="location"
									placeholder="Pilih lokasi penyimpanan"
									value={formik.values.location}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.location}
									touched={formik.touched.location}
									listData={locationList}
									handleSearch={handleSearchLocation}
								/>
							</div>
						</div>

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Merk</p>
								<CustomSelectField
									name="brand"
									placeholder="Pilih merk obat"
									value={formik.values.brand}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.brand}
									touched={formik.touched.brand}
									listData={brandList}
									handleSearch={handleSearchBrand}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Supplier</p>
								<CustomSelectMultipleField
									name="supplier"
									placeholder="Pilih pemasok obat"
									value={formik.values.supplier}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.supplier}
									touched={formik.touched.supplier}
									listData={supplierList}
									handleSearch={handleSearchSupplier}
								/>
							</div>
						</div>

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Stok awal</p>
								<NumberField
									name="stock"
									placeholder="ex: 100"
									value={formik.values.stock}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.stock}
									touched={formik.touched.stock}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Stok min</p>
								<NumberField
									name="stockMin"
									placeholder="ex: 20"
									value={formik.values.stockMin}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur.stockMin}
									errorMessage={formik.errors.stockMin}
									touched={formik.touched.stockMin}
								/>
							</div>
						</div>

						<div className="mb-8 flex justify-between">
							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Harga Jual</p>
								<NumberField
									name="sellingPrice"
									placeholder="ex: 10000"
									value={formik.values.sellingPrice}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.sellingPrice}
									touched={formik.touched.sellingPrice}
								/>
							</div>

							<div className="w-[49%]">
								<p className="mb-1 ml-2 text-slate-600">Harga Beli</p>
								<NumberField
									name="purchasePrice"
									placeholder="ex: 10000"
									value={formik.values.purchasePrice}
									setFieldValue={formik.setFieldValue}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.purchasePrice}
									touched={formik.touched.purchasePrice}
								/>
							</div>
						</div>

						<div className="flex">
							<div className="mr-2">
								<ButtonPrimay name="Save" type="submit" />
							</div>

							<ButtonSecondary
								name="Cancel"
								type="button"
								onClick={() => navigate(-1)}
							/>
						</div>
					</div>
				</form>
			</CardContent>
		</section>
	);
}

export default ProductCreate;
