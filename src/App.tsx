import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TheoryMenu from "./components/TheoryMenu";

// types
export type Themes = "light" | "dark";
export type Pages = "Maker" | "Theory" | "Functions" | "Library";

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

	// page logic
	const [page, setPage] = useState<Pages>("Maker");

	const changePage = (page: Pages) => {
		setPage(page);
	};

	let content;

	if (page === "Theory") {
		content = <TheoryMenu />;
	}

	return (
		<>
			<Header theme={theme} changeTheme={changeTheme} />
			<Navbar onClick={changePage} page={page} />
			<div className="mx-4 flex flex-col gap-4 mt-25 md:ml-50 md:mr-4 mb-4">
				<h1 className="text-2xl font-bold">{page}</h1>
				{content}
			</div>
		</>
	);
};
export default App;
