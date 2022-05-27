import React from "react";
import moment from "moment";
import "moment/locale/id";
import { store } from "../../../stores";

export const CashierReport = React.forwardRef((props, ref) => {
	const transList = store.getState().transactionValue;

	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 z-[99999] bg-white">
			<div
				className="fixed z-[999999] w-[211px] overflow-hidden border bg-white"
				ref={ref}
			>
				<div className="p-4 text-justify">
					<p className="text-[10px] leading-3">Apotek Cepat Sembuh</p>
					<p className="text-[10px] leading-3">
						Jl. Diponegoro No. 82 Semarapura Klungkung
					</p>
					<p className="text-[10px] leading-3">Bali</p>

					<div className="flex justify-between">
						<p className="text-[10px] leading-3">
							No : <span>{transList.transactionId}</span>
						</p>
						<p className="text-[10px] leading-3">
							{moment(transList.date).local("id").format("L")}
						</p>
					</div>

					<div className="flex justify-between">
						<p className="text-[10px] leading-3">
							Opr : <span>{transList.operator}</span>
						</p>
						<p className="text-[10px] leading-3">
							{moment(transList.date).local("id").format("LTS")}
						</p>
					</div>

					<div className="text-justify text-[10px] leading-4 tracking-tight">
						--------------------------------------
					</div>

					{transList.detailList.map((detail, index) => {
						return (
							<div key={index}>
								<p className="text-[10px] leading-3">{detail.name}</p>
								<div className="flex justify-between">
									<p className="pl-2 text-[10px] leading-3">
										{detail.quantity}
									</p>
									<p className="text-[10px] leading-3">{detail.price}</p>
									<p className="text-[10px] leading-3">{detail.subTotal}</p>
								</div>
							</div>
						);
					})}

					<div className="text-justify text-[10px] leading-4 tracking-tight">
						--------------------------------------
					</div>

					<div className="flex justify-between">
						<div className="flex w-[30%] justify-between">
							<p className="text-[10px] leading-3">ITEM :</p>
							<p className="text-[10px] leading-3">
								{transList.detailList.length}
							</p>
						</div>

						<div className="flex w-[65%] justify-between">
							<div className="flex w-[40%] justify-between">
								<p className="text-[10px] leading-3">Discount</p>
								<p className="text-[10px] leading-3">:</p>
							</div>
							<p className="text-[10px] leading-3">{transList.totalDiscount}</p>
						</div>
					</div>

					<div className="flex justify-end">
						<div className="flex w-[65%] justify-between">
							<div className="flex w-[40%] justify-between">
								<p className="text-[10px] leading-3">Total</p>
								<p className="text-[10px] leading-3">:</p>
							</div>
							<p className="text-[10px] leading-3">{transList.total}</p>
						</div>
					</div>

					<div className="flex justify-end">
						<div className="flex w-[65%] justify-between">
							<div className="flex w-[40%] justify-between">
								<p className="text-[10px] leading-3">Bayar</p>
								<p className="text-[10px] leading-3">:</p>
							</div>
							<p className="text-[10px] leading-3">{transList.payment}</p>
						</div>
					</div>

					<div className="flex justify-end">
						<div className="flex w-[65%] justify-between">
							<div className="flex w-[40%] justify-between">
								<p className="text-[10px] leading-3">Kembali</p>
								<p className="text-[10px] leading-3">:</p>
							</div>
							<p className="text-[10px] leading-3">{transList.changePayment}</p>
						</div>
					</div>

					<div className="text-justify text-[10px] leading-4 tracking-tight">
						--------------------------------------
					</div>

					<p className="text-[9.5px] leading-3 tracking-tighter">
						TERIMA KASIH, SEMOGA LEKAS SEMBUH
					</p>
					<p className="text-[9.5px] leading-3 tracking-tighter">
						MAAF, OBAT YANG SDH DIBELI TDK DPT DITUKAR ATAU DIUANGKAN KEMBALI
					</p>
				</div>
			</div>
		</div>
	);
});
