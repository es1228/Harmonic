import { useEffect, useState } from "react";
import Header from "./components/Header";

export type Themes = "light" | "dark";

const App = () => {
	// theme logic
	const [theme, setTheme] = useState<Themes>(() => {
		let data: Themes;
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme) {
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? (data = "dark")
				: (data = "light");
		} else {
			data = savedTheme as Themes;
		}

		return data;
	});

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
			root.classList.remove("light");
		} else {
			root.classList.add("light");
			root.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const changeTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};
	return (
		<>
			<Header theme={theme} changeTheme={changeTheme} />
		</>
	);
};
export default App;
