import { useEffect, useState } from "react";
import Header from "./components/Header";

export type Themes = "light" | "dark";

const App = () => {
	// theme logic
	const [theme, setTheme] = useState<Themes>("dark");

	useEffect(() => {
		const root = document.documentElement
		if (theme === "dark") {
			root.classList.add("dark");
			root.classList.remove("light");
		}
		else {
			root.classList.add("light");
			root.classList.remove("dark");
		}
	}, [theme]);

	const changeTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return (
		<>
			<Header changeTheme={changeTheme} theme={theme} />
		</>
	);
};
export default App;
