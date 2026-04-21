import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import Checkbox from "./Checkbox";

type QuizSettingsProps = {
	settings: string[][];
	enabledOptions: boolean[][];
	onCheckboxClick: (row: number, index: number) => void;
};

const QuizSettings = ({
	settings,
	enabledOptions,
	onCheckboxClick,
}: QuizSettingsProps) => {
	const sectionLabels = ["Clefs", "Key Types", "Options"];
	const [isActive, setIsActive] = useState<boolean>(false);
	const ref = useOutsideClick<HTMLUListElement>(() => setIsActive(false));
	const allSettings = settings.map((group, rowIndex) => (
		<div key={rowIndex}>
			<h1>{sectionLabels[rowIndex] || "Settings"}</h1>
			{group.map((opt, optIndex) => (
				<li
					key={rowIndex}
					className="w-15 rounded-2xl p-4 text-center transition duration-100"
				>
					<div className="flex gap-2 capitalize">
						<Checkbox
							toggleOption={() => onCheckboxClick(rowIndex, optIndex)}
							checked={enabledOptions[rowIndex]?.[optIndex] ?? false}
						/>
						{opt}
					</div>
				</li>
			))}
		</div>
	));
	return (
		<>
			<button
				className="group bg-on-bg dark:bg-on-bg-dark fixed top-25 right-20 flex w-10 items-center justify-center rounded-full p-2 text-center transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
				onClick={() => setIsActive(true)}
			>
				<span className="icon icon-rounded group-hover:icon-filled group-hover:icon-700 transition-all duration-100">
					settings
				</span>
			</button>
			<div
				className={`fixed inset-0 z-100000 bg-black/50 transition-discrete duration-100 ease-in-out starting:opacity-0 ${isActive ? "block opacity-100" : "hidden opacity-0"}`}
			>
				<ul
					className="bg-on-bg/70 dark:bg-on-bg-dark/70 fixed top-20 right-2 bottom-28 z-100000 w-70 overflow-auto rounded-2xl p-4 backdrop-blur-lg md:bottom-2"
					ref={ref}
				>
					{allSettings}
				</ul>
			</div>
		</>
	);
};
export default QuizSettings;
