type CheckboxProps = {
	checked: boolean;
	toggleOption: () => void;
};

const Checkbox = ({ checked, toggleOption }: CheckboxProps) => {
	return (
		<label className="flex items-center">
			<input type="checkbox" className="peer appearance-none" />
			<div
				className="group flex w-fit rounded-full peer-hover:cursor-pointer"
				onClick={toggleOption}
			>
				<span className="icon icon-rounded group-peer-hover:icon-filled group-peer-hover:icon-700 transition-all duration-100">
					{checked ? "check_box" : "check_box_outline_blank"}
				</span>
			</div>
		</label>
	);
};
export default Checkbox;
