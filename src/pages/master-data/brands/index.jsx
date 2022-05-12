import { TextField } from "../../../components/form.field";
import {
	ButtonPrimay,
	IconButtonDelete,
	IconButtonEdit,
} from "../../../components/button";

function Brand() {
	return (
		<section className="brand min-h-[80vh] w-full">
			<div className="brand__head mb-5">
				<span className="text-2xl text-slate-600">Data Merk Obat</span>
			</div>

			<div className="brand__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<form className="h-100 flex w-full items-center justify-start">
						<div className="mr-5 w-[300px]">
							<TextField placeholder="Input brand" />
						</div>

						<ButtonPrimay name="save" />
					</form>
				</div>
			</div>

			<div className="brand__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							brand="text"
						/>
						<div className="flex w-[50px] items-center justify-center border-l-2">
							<i className="fa-solid fa-magnifying-glass text-slate-700" />
						</div>
					</div>

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>Code</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-slate-200">
								<td>001</td>
								<td>Hufagesic</td>
								<td className="flex justify-center py-2">
									<IconButtonEdit />
									<IconButtonDelete />
								</td>
							</tr>
							<tr className="border-b border-slate-200">
								<td>002</td>
								<td>Mixagrip Flu</td>
								<td className="flex justify-center py-2">
									<IconButtonEdit />
									<IconButtonDelete />
								</td>
							</tr>
							<tr className="border-b border-slate-200">
								<td>003</td>
								<td>Naprex</td>
								<td className="flex justify-center py-2">
									<IconButtonEdit />
									<IconButtonDelete />
								</td>
							</tr>
						</tbody>
					</table>

					<div className="brand__footer flex">
						<div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-l-md border text-slate-700 hover:bg-slate-200">
							<i className="fa-solid fa-angle-left text-slate-700" />
						</div>

						<div className="flex h-8 w-8 items-center justify-center border-t border-b text-slate-700">
							<span>1</span>
						</div>

						<div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-r-md border text-slate-700 hover:bg-slate-200">
							<i className="fa-solid fa-angle-right text-slate-700" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Brand;
