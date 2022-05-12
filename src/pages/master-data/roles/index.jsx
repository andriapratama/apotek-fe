import { TextField } from "../../../components/form.field";
import {
	ButtonPrimay,
	IconButtonDelete,
	IconButtonEdit,
} from "../../../components/button";

function Role() {
	return (
		<section className="role min-h-[80vh] w-full">
			<div className="role__head mb-5">
				<span className="text-2xl text-slate-600">Data Role</span>
			</div>

			<div className="role__body mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<form className="h-100 flex w-full items-center justify-start">
						<div className="mr-5 w-[300px]">
							<TextField />
						</div>

						<ButtonPrimay name="save" />
					</form>
				</div>
			</div>

			<div className="role__content mb-5 w-full rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
				<div className="p-5">
					<div className="mb-5 flex w-[350px] rounded-md border border-slate-200">
						<input
							className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
							placeholder="Search"
							type="text"
						/>
						<div className="flex w-[50px] items-center justify-center border-l-2">
							<i className="fa-solid fa-magnifying-glass text-slate-700" />
						</div>
					</div>

					<table className="mb-5 w-full border-collapse text-center">
						<thead>
							<tr className="border-b-2 border-slate-200">
								<th>No</th>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-slate-200">
								<td>1</td>
								<td>Super Admin</td>
								<td className="flex justify-center py-2">
									<IconButtonEdit />
									<IconButtonDelete />
								</td>
							</tr>
							<tr className="border-b border-slate-200">
								<td>2</td>
								<td>Admin</td>
								<td className="flex justify-center py-2">
									<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-slate-500 text-white">
										<i className="fa-solid fa-pencil" />
									</div>

									<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-red-500 text-white">
										<i className="fa-regular fa-trash-can" />
									</div>
								</td>
							</tr>
							<tr className="border-b border-slate-200">
								<td>3</td>
								<td>Apoteker</td>
								<td className="flex justify-center py-2">
									<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-slate-500 text-white">
										<i className="fa-solid fa-pencil" />
									</div>

									<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-red-500 text-white">
										<i className="fa-regular fa-trash-can" />
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div className="role__footer flex">
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

export default Role;
