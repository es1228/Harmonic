import { useState } from "react";
import OptionCard from "./OptionCard";
import QuizPage from "./QuizPage";
import { pageDescriptions, pageTitles, sectionTitles } from "./Constants";

const TheoryPage = () => {
	const [pageView, setPageView] = useState<"Theory" | "Quiz">("Theory");

	const menu = (
		<div className="flex flex-col gap-4">
			{sectionTitles.map((title, sIndex) => (
				<div key={title} className="flex flex-col gap-4">
					<h1 className="text-lg">{title}</h1>
					<hr className="text-text-secondary rounded-2xl" />
					{pageTitles[sIndex].map((title, tIndex) => (
						<OptionCard
							title={title}
							description={pageDescriptions[sIndex][tIndex]}
							onClick={() => setPageView("Quiz")}
						/>
					))}
				</div>
			))}
		</div>
	);

    const handleExit = () => setPageView("Theory")

	if (pageView === "Quiz")
		return <QuizPage title="Identify the displayed note" onExit={handleExit}/>;

	return menu;
};
export default TheoryPage;
