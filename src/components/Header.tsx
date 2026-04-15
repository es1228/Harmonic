import type { Themes } from "../App";
import HeaderItem from "./HeaderItem";

type HeaderProps = {
	theme: Themes;
	changeTheme: () => void;
};

const Header = ({ theme, changeTheme }: HeaderProps) => {
	return (
		<div className="bg-primary dark:bg-primary-dark m-2 flex rounded-2xl p-4 md:rounded-bl-none">
			<div className="ml-2 flex items-center gap-2">
				<span className="icon icon-rounded">music_note</span>
				<h1 className="text-lg font-bold">Harmonic</h1>
			</div>
			<nav className="ml-auto">
				<ul className="flex gap-4">
					<HeaderItem
						onClick={() =>
							open("https://github.com/es1228/Harmonic")
						}
						icon="code"
						text="Repo"
					/>
					<HeaderItem
						onClick={() =>
							open(
								"https://raw.githubusercontent.com/es1228/Harmonic/main/README.md",
							)
						}
						icon="info"
						text="About"
					/>
					<HeaderItem
						onClick={changeTheme}
						icon={theme === "dark" ? "dark_mode" : "light_mode"}
						text="Theme"
					/>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
