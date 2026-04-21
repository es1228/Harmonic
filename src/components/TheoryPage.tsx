import { useState } from "react";
import OptionCard from "./OptionCard";
import QuizPage from "./QuizPage";
import { pageDescriptions, pageTitles, sectionTitles } from "./Constants";

const TheoryPage = () => {
	const [key, setKey] = useState(0);
	const [pageView, setPageView] = useState<"Theory" | "Quiz">("Theory");
	const [title, setTitle] = useState("");
	const [section, setSection] = useState("Staff Identification");
	const [topic, setTopic] = useState("");

	const menu = (
		<div className="flex flex-col gap-4">
			{sectionTitles.map((title, sIndex) => (
				<div key={title} className="flex flex-col gap-4">
					<h1 className="text-lg">{title}</h1>
					{pageTitles[sIndex].map((title, tIndex) => (
						<OptionCard
						key={title}
							title={title}
							description={pageDescriptions[sIndex][tIndex]}
							onClick={() => {
								setTitle(pageDescriptions[sIndex][tIndex]);
								setTopic(pageTitles[sIndex][tIndex]);
								setPageView("Quiz");
							}}
						/>
					))}
				</div>
			))}
		</div>
	);

	const handleExit = () => setPageView("Theory");

	if (pageView === "Quiz")
		return (
			<QuizPage
				key={key}
				title={title}
				section={section}
				topic={topic}
				onExit={handleExit}
			/>
		);

	return menu;
};
export default TheoryPage;
