import type { Themes } from "../App";
import HeaderItem from "./HeaderItem";

type HeaderProps = {
	theme: Themes;
	changeTheme: () => void;
};

const Header = ({ theme, changeTheme }: HeaderProps) => {
	return (
		<div className="bg-on-bg/70 dark:bg-on-bg-dark/70 fixed top-0 right-0 left-0 z-100000 flex p-4 backdrop-blur-2xl">
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
