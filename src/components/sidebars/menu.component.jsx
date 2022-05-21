import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageRedux } from "../../stores/reducers/pagination.reducer";

function MenuComponent({ name, icon, link }) {
	const dispatch = useDispatch();

	return (
		<NavLink
			to={`${link}`}
			className={({ isActive }) =>
				`mb-1 flex h-[40px] w-full cursor-pointer items-center hover:bg-white ${
					isActive ? "bg-white" : "bg-transparent"
				}`
			}
			onClick={() => dispatch(setPageRedux(1))}
		>
			<div className="ml-4 w-[40px]">
				<i className={`${icon} text-slate-500`} />
			</div>

			<div className="w-[160px]">
				<span className="text-slate-500">{name}</span>
			</div>
		</NavLink>
	);
}

export default MenuComponent;
