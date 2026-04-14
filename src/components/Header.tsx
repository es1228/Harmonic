import type { Themes } from "../App";

type HeaderProps = {
	theme: Themes;
	changeTheme: () => void;
};

const Header = ({ theme, changeTheme }: HeaderProps) => {
	return (
		<div className="m-2 flex rounded-2xl bg-slate-300 p-4 dark:bg-slate-900">
			<div className="flex items-center gap-2">
				<span className="icon icon-rounded">music_note</span>
				<div>
					<h1 className="text-lg font-bold">Harmonic</h1>
					<p className="text-xs">FOSS Music Site</p>
				</div>
			</div>
			<nav className="ml-auto">
				<ul className="flex gap-4">
					<li
						className="group flex flex-col items-center transition-all duration-100 hover:cursor-pointer"
						onClick={() =>
							open("https://github.com/es1228/Harmonic")
						}
					>
						<span className="icon icon-rounded group-hover:icon-700 transition-all duration-100">
							code
						</span>
						<p className="text-xs group-hover:underline">Repo</p>
					</li>
					<li
						className="group flex flex-col items-center transition-all duration-100 hover:cursor-pointer"
						onClick={() =>
							open(
								"https://raw.githubusercontent.com/es1228/Harmonic/main/README.md",
							)
						}
					>
						<span className="icon icon-rounded group-hover:icon-filled transition-all duration-100">
							info
						</span>
						<p className="text-xs group-hover:underline">About</p>
					</li>
					<li
						className="group flex flex-col items-center transition-all duration-100 hover:cursor-pointer"
						onClick={changeTheme}
					>
						<span className="ms-rounded icon icon-rounded group-hover:icon-filled transition-all duration-100">
							{theme === "dark" ? "dark_mode" : "light_mode"}
						</span>
						<p className="text-xs group-hover:underline">Theme</p>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
